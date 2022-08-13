import React from 'react';
// import { connect } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { Input, Divider } from 'antd';
import { Link } from 'react-router-dom';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// import WomanPicture from '../../assets/images/form.webp'

import Footer from '../../utils/footer';
import Nav from '../../utils/nav';

const ForgotPassword = () => {

    const signupValidator = yup.object().shape({
        emailAddress: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
    })

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(signupValidator)
    });

    const signUpUser = e => {
        console.log(e)
    }

    return (
        <div>
            <Nav />
            <div>
                <div className="forgot_center">
                    <div className="contain">
                        <div className="form">
                            <div>
                                <h3>Reset password</h3>
                                <p>Top-end financial tools to help your business with its financial
                                    operations and cash flow. We help companies of all types work
                                    better.</p>
                            </div>
                            <form onSubmit={handleSubmit(signUpUser)}>
                                <div className="form-group">
                                    <label htmlFor="emailAddress">Email address</label>
                                    <Controller name="emailAddress" control={control}
                                        render={({ field }) => {
                                            return (
                                                <Input style={{ height: '5rem' }} type="email" {...field}
                                                    name="emailAddress" />
                                            )
                                        }} />
                                    {errors.emailAddress && <p className="errorMessage">{errors.emailAddress.message}</p>}
                                </div>
                                <button>Get passsword reset link</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ForgotPassword;