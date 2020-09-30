import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import { Formik, Field, ErrorMessage } from 'formik';
import { StyledForm } from '../../styled-components/LoginStyles';
import { connect } from "react-redux";
import { login } from "../../actions/auth";



// import * as AuthService from "../../services/auth.service";


const LoginForm = ({ dispatch, isLoggedIn, message }) => {
    const history = useHistory();
    // const [isLogin, setLogin] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const userInfo = await AuthService.getCurrentUser();
    //         if (userInfo && userInfo.success) {
    //             setLogin(true);
    //         }
    //     }
    //     fetchData();
    // }, []);

    const initialValues = {
        username: '',
        password: '',
    };

    const submitForm = async (values) => {
        try {
            const result = await dispatch(login(values.username, values.password));
            if (result.success) {
                history.push('/admin');
            } else {
                alert(result.message);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const validations = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is Required';
        }
        // else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //     errors.email = 'Invalid email address';
        // }

        if (!values.password) {
            errors.password = 'Password is Required';
        }
        return errors;
    };

    return (
        isLoggedIn ?
            <React.Fragment>
                <Redirect to="/admin" />
            </React.Fragment>
            :
            <React.Fragment>
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitForm}
                    validate={validations}
                >
                    {({ isSubmitting }) => (
                        <StyledForm>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <Field id="username" className="form-control" name="username" placeholder="Username" />
                            <ErrorMessage name="username" component="div" />

                            <Field type="password" id="password" name="password" className="form-control" placeholder="Password" />
                            <ErrorMessage name="password" component="div" />
                            <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={isSubmitting}>Sign in</button>
                        </StyledForm>
                    )}
                </Formik>
            </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(LoginForm);