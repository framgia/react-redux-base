import React from 'react'
import {connect} from 'react-redux'
import Register from './../../components/auth/Register'
import initialize from './../../utils/initialize';
import { withRouter } from 'next/router'
import { reqRegisterAuth } from './../../modules/auth/actions'
import { alertsSelector } from './../../modules/alert/selectors';
import { authSelector } from './../../modules/auth/selectors';

class RegisterPage extends React.Component {

    static getInitialProps ({ctx}) {
        initialize(ctx);
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: [],
            isLoading: false
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.alert) {
            this.setState({
                errors: nextProps.alert.errors,
                isLoading: false
            });
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password_confirmation } = this.state;
        const params = {username, email, password, password_confirmation};
        this.props.registerAuth(params, this.props.router);
        this.setState({isLoading: true});
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.router.push('/');
        }
    }

    render () {
        return (
            <Register 
                alert={this.props.alert}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                form={this.state}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : authSelector(state),
        alert: alertsSelector(state)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        registerAuth: (data, router) => {
            dispatch(reqRegisterAuth(data, router));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));
