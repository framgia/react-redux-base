import React, {Component} from 'react';
import ActiveLink from './../ActiveLink'
import {connect} from "react-redux";
import Loading from './../Loading';

export default class Login extends Component {
    render() {
        let props = this.props
        let {
            email,
            password,
            success,
            errors,
            error,
            isLoading
        } = props.form;
        const { classes, onSubmit, onChange } = props;

        const successMessage = <div className="p-2 mb-2 bg-success text-white">{success}</div>;
        const errorMessage = <div className="p-2 mb-2 bg-danger text-white">{error}</div>;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                {isLoading && 
                                    <Loading />
                                }
                                <div className="form-label-group">{ success ? successMessage : (error ? errorMessage : '') }</div>
                                <form className="form-signin" onSubmit={onSubmit}>
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            className={`form-control${
                                                errors && errors.email ? ' border border-danger' : ''
                                            }`}
                                            name="email"
                                            placeholder="Email address or Username"
                                            value={email}
                                            onChange={onChange}
                                            />
                                        {errors && errors.email &&
                                            <span className="form-field__required text-danger">{errors.email}</span>
                                        }
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            className={`form-control${
                                                errors && errors.password ? ' border border-danger' : ''
                                            }`}
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={onChange}
                                            />
                                        {errors && errors.password &&
                                            <span className="form-field__required text-danger">{errors.password}</span>
                                        }
                                    </div>
                                    <hr className="my-4"/>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    <div className="text-center">
                                        <span>
                                            Don't have an account? 
                                            <ActiveLink name='register'>Sign Up</ActiveLink>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
