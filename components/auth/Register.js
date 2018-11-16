import React, {Component} from 'react';
import ActiveLink from './../ActiveLink'
import {connect} from "react-redux";
import Loading from './../Loading';

export default class Register extends Component {
    render() {
        let props = this.props;
        let {
            username,
            email,
            password,
            password_confirmation,
            errors,
            isLoading
        } = props.form;
        const { classes, onSubmit, onChange } = props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign Up</h5>
                                {isLoading && 
                                    <Loading />
                                }
                                <form className="form-signin" onSubmit={onSubmit}>
                                    <div className="form-label-group">
                                        <input 
                                            type="text"
                                            name="username"
                                            className={`form-control${
                                                errors && errors.username ? ' border border-danger' : ''
                                            }`}
                                            placeholder="Username"
                                            value={username}
                                            onChange={onChange}
                                            />
                                        {errors && errors.username &&
                                            <span className="form-field__required text-danger">{errors.username}</span>
                                        }
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className={`form-control${
                                                errors && errors.email ? ' border border-danger' : ''
                                            }`}
                                            placeholder="Email address"
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
                                            name="password"
                                            className={`form-control${
                                                errors && errors.password ? ' border border-danger' : ''
                                            }`}
                                            placeholder="Password"
                                            value={password}
                                            onChange={onChange}
                                            />
                                        {errors && errors.password &&
                                            <span className="form-field__required text-danger">{errors.password}</span>
                                        }
                                    </div>
                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            className={`form-control${
                                                errors && errors.password ? ' border border-danger' : ''
                                            }`}
                                            placeholder="Confirm Password"
                                            value={password_confirmation}
                                            onChange={onChange}
                                            />
                                        {errors && errors.password &&
                                            <span className="form-field__required text-danger">{errors.password}</span>
                                        }
                                    </div>
                                    <hr className="my-4"/>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase">Sign Up</button>
                                    <div className="text-center">
                                        <span>
                                            Already have an account?
                                            <ActiveLink name='login'> Sign In</ActiveLink>
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
