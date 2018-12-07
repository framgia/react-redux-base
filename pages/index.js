import React from 'react'
import {connect} from 'react-redux'
import ActiveLink from './../components/ActiveLink';
import Main from './../components/Main';
import initialize from '../utils/initialize';
import { withRouter } from 'next/router'
import { authSelector } from './../modules/auth/selectors';
import { Row, Col, Table, Alert, Icon } from 'antd';
import GM from 'g2-mobile';
GM.Global.pixelRatio = 2;
const Util = GM.Util;
import PanelBox from './../components/layouts/PanelBox';
import createGM from '../utils/gm';
import { chartData, pieData, barData } from './../constants/chart';
var Shape = GM.Shape;
var G = GM.G;

class Index extends React.Component {
    static getInitialProps ({ctx}) {
        if (ctx) {
            initialize(ctx);
        }
    }

    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.router.push('/auth/login');
        }
    }

    componentWillReceiveProps(nextProps){
        if (!nextProps && nextProps.auth.isAuthenticated) {
            nextProps.router.push('/auth/login');
        }
    }

    render () {
        return (
        	<Main>
                <div>x</div>
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : authSelector(state)
    }
};

export default withRouter(connect(mapStateToProps)(Index));