import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleSuccesfulAuth, handleToggleClick }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    // const [loginErrors, setLoginErrors] = useState("")
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp(".{6,}");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validEmail.test(email) && validPassword.test(password)){
            axios.post("https://princestavernapi.herokuapp.com/sessions", {
                user: {
                    password: password,
                    email: email,
                }
            }, {
                withCredentials: true
            }).then(response => {
                console.log(response)
                if (response.data.status === "created") {
                    handleSuccesfulAuth(response.data)
                }
            }).catch(error => {
                console.log("login error", error)
            })
        } else if(!validEmail.test(email) && !validPassword.test(password)){
            setEmailErr(true);
            setPwdError(true);
        } else if(!validEmail.test(email)){
            setEmailErr(true);
            setPwdError(false);
        } else {
            setPwdError(true);
            setEmailErr(false);
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div className="form-container">
            <h2>Login</h2>

             <Form onSubmit={handleSubmit}>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" value={email} className={ emailErr ? "invalid" : ""} onChange={handleEmailChange} />
                    { emailErr ? <p className="invalid-text">must be a valid email</p> : ""}
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" name="password" className={ pwdError ? "invalid" : ""} placeholder="Password" value={password} onChange={handlePasswordChange} />
                    { pwdError ? <p className="invalid-text">password must be 6 characters</p> : ""}
                </Form.Group>

                <div className="form-button-container form-bottom">
                    <div>
                        <p onClick={handleToggleClick} className="purple">Not Registered?</p>
                        <Link to='/forgotten' className="purple">Forgot Password?</Link>
                    </div>
                    <Button className="form-button" type="submit">
                        Log In
                    </Button>
                </div>
            </Form>

        </div>
    )
}

export default LoginForm
