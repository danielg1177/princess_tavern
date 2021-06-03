import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const LoginForm = ({ handleSuccesfulAuth, handleClick }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginErrors, setLoginErrors] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3002/sessions", {
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
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                </Form.Group>
                
                <div className="form-button-container">
                    <Button className="form-button" type="submit">
                        Log In
                    </Button>
                </div>
            </Form>
            <p onClick={handleClick}>Not Registered?</p>
        </div>
    )
}

export default LoginForm
