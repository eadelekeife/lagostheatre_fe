import './style.css';

import React, { useEffect, useState } from 'react';
import { Input, Divider, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { loginUser } from '../../utils/reducers/auth';
// import { connect } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Footer from '../../utils/footer';
import Nav from '../../utils/nav';

const SignUp = props => {

    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;

    const validator = yup.object().shape({
        emailAddress: yup.string().email('Email is not valid').required('Email field can not be empty'),
        password: yup.string().min(6).required('Password field can not be empty')
    })

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValue: {
            emailAddress: "",
            password: "",
        },
        resolver: yupResolver(validator)
    });

    // useEffect(() => {
    //     if (props.auth.isAuthenticated) {
    //         window.location = "/profile";
    //     }
    //     if (props.loginError.loginError.length) {
    //         setErrorMessage(props.loginError.loginError);
    //         setLoadingData(false);
    //     }
    // }, [props.auth, props.loginError]);
    const submitMe = e => {
        // setLoadingData(true);
        // setErrorMessage('');
        // let { emailAddress, password } = e;
        // props.loginUser({
        //     emailAddress, password
        // });
    }
    return (
        <div>
            <Nav />
            <div className="form form_page">
                <div className="alignbothtoside">
                    <div>
                        <div className="form_detail contain">
                            <div>
                                <h3>Sign in to your account</h3>
                                <p className="form_text">Konnect is a customer centric app that provides
                                    wholesale products to retail users it makes life easy.</p>
                            </div>
                            {errorMessage ?
                                <p className="error-message">{errorMessage}</p> : ''
                            }
                            <form onSubmit={handleSubmit(submitMe)}>
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
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Controller name="password" control={control}
                                        render={({ field }) => {
                                            return (
                                                <Input.Password type="password" style={{ height: '5rem' }} {...field}
                                                    name="password" />
                                            )
                                        }} />
                                    {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                                </div>
                                {/* <button>Sign in to your account</button> */}
                                {/* <button className="bg-blue" style={{ height: '3rem', width: '100%' }} id="submit-form">
                                    Sign in</button> */}
                                {
                                    loadingData
                                        ?
                                        <button>
                                            <span style={{ marginRight: '10px' }}>Signing in. Please wait...</span>
                                            <Spin indicator={antIcon} /></button>
                                        :
                                        <button>Sign in to your account</button>
                                }
                                <Divider orientation="left">Or</Divider>
                                <Link to="/signup"
                                    className="margin-bottom">No account yet? Create one here</Link>
                                <Link to="/forgotpassword"
                                    className="margin-bottom">Forgot password? Reset here</Link>
                            </form>
                        </div>
                    </div>
                    <div className="full_image_background">
                    </div>
                </div>
            </div>
            <div className="show-on-mobile-only">
                <Footer />
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return { auth: state.auth, loginError: state.loginError }
// }

// export default connect(mapStateToProps, { loginUser })(SignUp);

export default SignUp;