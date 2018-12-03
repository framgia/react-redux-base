import React from 'react'
import {connect} from 'react-redux'
import List from './../components/product/List'
import ActiveLink from './../components/ActiveLink';
import Main from './../components/Main';
import initialize from '../utils/initialize';
import { withRouter } from 'next/router'
import { authSelector } from './../modules/auth/selectors';

class Index extends React.Component {
    static getInitialProps ({ctx}) {
        initialize(ctx);
    }

    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.router.push('/auth/login');
        }
    }

    render () {
        return (
        	<Main>
    	        <span>This is Home Page</span><br/>
    		    <ActiveLink name='products'>Products</ActiveLink>
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