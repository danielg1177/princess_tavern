import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Registration = ({ handleSuccesfulAuth, handleToggleClick }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [pwdConfError, setPwdConfError] = useState(false);
    const [registrationErrors, setRegistrationErrors] = useState("")

    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp(".{6,}");

    const validPasswordConfirmation = () => {
        if(password === passwordConfirmation) return true
        return false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validEmail.test(email) && validPassword.test(password) && validPasswordConfirmation(passwordConfirmation)) {
            axios.post("https://princestavernapi.herokuapp.com//registrations", {
                user: {
                    password: password,
                    email: email,
                    password_confirmation: passwordConfirmation
                }
            }, {
                withCredentials: true
            }).then(response => {
                if (response.data.status === "created") {
                    handleSuccesfulAuth(response.data)
                }
            }).catch(error => {
                console.log("registration error", error)
            })
        } else {
            validEmail.test(email) ? setEmailErr(false) : setEmailErr(true);
            validPassword.test(password) ? setPwdError(false) : setPwdError(true);
            validPasswordConfirmation() ? setPwdConfError(false) : setPwdConfError(true)
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value)
    }


    return (
        <div className="form-container">
            <h2>Register</h2>

             <Form onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" className={ emailErr ? "invalid" : ""} value={email} onChange={handleEmailChange} />
                    { emailErr ? <p className="invalid-text">must be a valid email</p> : ""}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" name="password" className={ pwdError ? "invalid" : ""} placeholder="Password" value={password} onChange={handlePasswordChange} />
                    { pwdError ? <p className="invalid-text">password must be 6 characters</p> : ""}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" placeholder="Password Confirmation" className={ pwdConfError ? "invalid" : ""} name="password_confirmation" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} />
                    { pwdConfError ? <p className="invalid-text">password and confirmation password must match</p> : ""}
                </Form.Group>

                <div className="form-button-container form-bottom">
                    <p onClick={handleToggleClick}>Already have an account?</p>
                    <Button className="form-button" type="submit">
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Registration
