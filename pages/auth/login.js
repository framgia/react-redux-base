import React from 'react'
import {connect} from 'react-redux'
import Login from './../../components/auth/Login'
import initialize from './../../utils/initialize';
import { withRouter } from 'next/router'
import { reqLoginAuth } from './../../modules/auth/actions'
import {compose} from 'redux';
import LanguageSwitch from './../../components/LanguageSwitch';
import { withNamespaces } from '../../i18n'

class LoginPage extends React.Component {
    static getInitialProps ({ctx}) {
        if (ctx) {
            initialize(ctx);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            success: '',
            errors: [],
            error: '',
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
                error: nextProps.alert.error,
                isLoading: false
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.router.push('/');
        }

        if (this.props.alert) {
            this.setState({
                success: this.props.alert.success
            })
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const params = { email, password };
        this.props.loginAuth(params, this.props.router)
        this.setState({
            isLoading: true
        })
    };

    render () {
        const {t} = this.props;
        return (
            <React.Fragment>
                <LanguageSwitch />
                <Login
                    alert={this.props.alert}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    form={this.state}
                    t={t}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        alert: state.alert
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginAuth: (data, router) => {
            dispatch(reqLoginAuth(data, router));
        }
    }
}

export default withRouter(
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withNamespaces('auth')
    )(LoginPage)
);
