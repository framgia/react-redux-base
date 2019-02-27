import React, {Component} from 'react';
import Link from 'next/link';
import ActiveLink from './../ActiveLink';
import { reqLogoutAuth, recLoginAuth, reqCurrentUser } from './../../modules/auth/actions';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'
import { getCookie, setCookie, removeCookie } from './../../utils/cookie';
import Http from './../../utils/Http';
import jwt_decode from 'jwt-decode';
import store from './../../store';
import {Auth} from './../../constants/ApiRequest';

class Header extends Component {
    onLogout = () => {
        this.props.logout();
        removeCookie('token');
        window.location.href = "/auth/login"
    }

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        const {auth} = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ActiveLink name='home' className='navbar-brand'>ReduxSaga</ActiveLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <ActiveLink name='products' className='nav-link'>Products</ActiveLink>
                        </li>
                    </ul>
                    <ul className="form-inline my-2 my-lg-0">
                        <Link href='javascript:;'>
                            <a onClick={this.onLogout}>Logout ({auth.user ? auth.user.username : ''})</a>
                        </Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
