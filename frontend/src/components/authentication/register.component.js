import React, { useState, useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import { isEmail } from "validator";
import { StyledForm } from '../../styled-components/LoginStyles';


import * as AuthService from "../../services/auth.service";

const RegisterForm = () => {
    const history = useHistory();

    const initialValues = {
        username: '',
        password: '',
        email: '',
    };


    const submitForm = async (values) => {
        try {
            const result = await AuthService.register(
                values.username,
                values.email,
                values.password
            );
            console.log(result);
            if (result.status === 200) {
                history.push('/admin');
            } else {
                alert(result.data.message);
            }
        } catch (error) {
            alert(error.status);
        }
    }

    const validations = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = 'Username is Required';
        } else if (values.username.length < 3 || values.username.length > 20) {
            errors.username = 'The username must be between 3 and 20 characters.'
        }

        if (!values.email) {
            errors.email = 'email is Required';
        } else if (!isEmail(values.email)) {
            errors.email = 'This is not a valid email.';
        }

        if (!values.password) {
            errors.password = 'password is Required';
        } else if (values.password.length < 6 || values.password.length > 40) {
            errors.password = 'The password must be between 6 and 40 characters.';
        }
        return errors;
    };

    return (
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
                        <Field id="email" name="email" className="form-control" placeholder="Email" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" id="password" name="password" className="form-control" placeholder="Password" />
                        <ErrorMessage name="password" component="div" />
                        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={isSubmitting}>Sign Up</button>
                    </StyledForm>
                )}
            </Formik>
        </React.Fragment>
    );
}

export default RegisterForm;