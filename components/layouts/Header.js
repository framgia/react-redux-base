import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Row, Col, Icon, Badge, Menu, Dropdown, Avatar, Popover } from 'antd'
import { withRouter } from 'next/router'
import Link from 'next/link';
import ActiveLink from './../ActiveLink';
import { reqLogoutAuth, recLoginAuth, reqCurrentUser } from './../../modules/auth/actions';
import { connect } from 'react-redux';
import { getCookie, setCookie, removeCookie } from './../../utils/cookie';
import Http from './../../utils/Http';
import jwt_decode from 'jwt-decode';
import store from './../../store';
import {Auth} from './../../constants/ApiRequest';
import { authSelector } from './../../modules/auth/selectors';

const { Header } = Layout;

class commonHeader extends React.Component {
    onLogout = () => {
        this.props.logout();
        localStorage.removeItem('refreshToken');
        window.location.href = "/auth/login"
    }
  componentDidMount() {
    if (getCookie('token') && !localStorage.refreshToken) {
        localStorage.setItem('refreshToken', Math.random().toString(36));
    }
    else if (getCookie('token') && localStorage.refreshToken) {
        let decoded = jwt_decode(getCookie('token'));
        let currentTime = Date.now()/1000;
        let timeOut = (parseFloat(decoded.exp) - parseFloat(currentTime))*1000;
        let timeRefresh = timeOut - 300000;
        if (parseFloat(decoded.exp) > parseFloat(currentTime) && timeOut >= timeRefresh) {
            if (this.requestTimeout) clearTimeout(this.requestTimeout);
            this.requestTimeout = setTimeout(() => {
                (new Http()).get(Auth.REFRESH)
                    .then(res => {
                        setCookie('token', res.data.token)
                        localStorage.removeItem('refreshToken');
                    })
                    .catch(err => {})
            }, timeRefresh)
        } else if (timeOut <= 0) {
            removeCookie('token');
            localStorage.removeItem('refreshToken');
            this.props.setNullIsAuthenticated();
            window.location.href = '/auth/login';
        }
    }
    
    this.props.getUser()
    }

    componentWillUnMount() {
        if (this.requestTimeout) clearTimeout(this.requestTimeout);
    }
  render () {
    const {profile} = this.props
    let username = 'abc'
    const menu = (
      <Menu>
        <Menu.Item>
          选项1
        </Menu.Item>
        <Menu.Item>
          选项2
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.onLogout}>Logout</a>
        </Menu.Item>
      </Menu>
    );

    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Row type="flex" justify="end" align="middle">
          <Col span={3}>
            <Badge className="header-icon" count={5}>
              <a href="#">
                <Icon type="mail" />
              </a>
            </Badge>
            <Popover content={content} title="Title" trigger="click">
              <Badge className="header-icon" dot>
                <a href="#">
                  <Icon type="notification" />
                </a>
              </Badge>
            </Popover>
          </Col>
          <Col span={3}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                <Avatar style={{ verticalAlign: 'middle'}}>{username}</Avatar> <Icon type="down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    )
  }
}

const mapStateToProps = state => ({
    auth: authSelector(state)
});

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: (router) => {
            dispatch(reqLogoutAuth(router));
        },
        refresh: () => {
            dispatch(reqRefreshAuth());
        },
        setNullIsAuthenticated: () => {
            dispatch(recLoginAuth(null));
        },
        getUser: () => {
            dispatch(reqCurrentUser());
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(commonHeader));
