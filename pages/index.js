import React from 'react'
import {connect} from 'react-redux'
import List from './../components/product/List'
import ActiveLink from './../components/ActiveLink';
import Main from './../components/Main';
import initialize from '../utils/initialize';
import { withRouter } from 'next/router'

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

    render () {
        let isLogged = this.props.auth.isAuthenticated;

        return (
            isLogged ? <Main>
                <span>This is Home Page</span><br/>
                <ActiveLink name='products'>Products</ActiveLink>
              </Main> : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default withRouter(connect(mapStateToProps)(Index));