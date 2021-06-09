import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ForgottenForm = ({ code, handleCodeSubmitted, email, handleEmailChange }) => {

    const [emailErr, setEmailErr] = useState(false);
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validEmail.test(email)){
            axios.post("http://localhost:3002/forgotten", {
                user: {
                    email: email,
                    code: code
                }
            }, {
                withCredentials: true
            }).then(response => {
                console.log(response)
                handleCodeSubmitted()
            }).catch(error => {
                console.log("login error", error)
            })
        } else {
            setEmailErr(true)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" className={ emailErr ? "invalid" : ""} value={email} onChange={handleEmailChange} />
                { emailErr ? <p className="invalid-text">must be a valid email</p> : ""}
            </Form.Group>
            
            <div className="form-button-container form-bottom">
                <div>
                    <Link to='/login'>Back to login</Link>
                </div>
                <Button className="form-button" type="submit">
                    Send Code
                </Button>
            </div>
        </Form>
    )
}

export default ForgottenForm
