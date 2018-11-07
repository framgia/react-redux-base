import React, {Component} from 'react';
import ActiveLink from './../ActiveLink'
import {connect} from "react-redux";
import Loading from './../Loading';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {styles} from '../../static/materialCSS/auth';
import { withRouter } from 'next/router'

class Register extends Component {
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
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        {isLoading && 
                            <Loading />
                        }
                        <form className={classes.form} onSubmit={onSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                    type="text"
                                    name="username"
                                    label="Username"
                                    value={username}
                                    onChange={onChange}
                                />
                                {errors && errors.username &&
                                    <span className="form-field__required text-danger">{errors.username}</span>
                                }
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    value={email}
                                    onChange={onChange}
                                />
                                {errors && errors.email &&
                                    <span className="form-field__required text-danger">{errors.email}</span>
                                }
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                    name="password"
                                    type="password"
                                    label="Password"
                                    value={password}
                                    onChange={onChange}
                                />
                                {errors && errors.password &&
                                    <span className="form-field__required text-danger">{errors.password}</span>
                                }
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                    name="password_confirmation"
                                    type="password"
                                    label="Password Confirmation"
                                    value={password_confirmation}
                                    onChange={onChange}
                                />
                                {errors && errors.password &&
                                    <span className="form-field__required text-danger">{errors.password}</span>
                                }
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                >
                            Sign Up
                            </Button>
                        </form>
                        <div className="text-center">
                            <span>
                                Don't have an account? 
                                <ActiveLink name='login'> Sign In</ActiveLink>
                            </span>
                        </div>
                    </Paper>
                </main>
            </React.Fragment>   
        );
    }
}

export default withRouter(withStyles(styles)(Register));
