import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import history from '../../Helpers/history';

const ForgottenResponse = ({ code, email }) => {

    const [userInput, setUserInput] = useState('');
    const [userConfirmed, setUserConfirmed] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [codeErr, setCodeErr] = useState(false)

    const handleUserInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value)
    }

    const handleCodeSubmit = (e) => {
        e.preventDefault()
        if(userInput === code){
            setUserConfirmed(true)
        } else {
            setCodeErr(true)
        }
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        axios.patch(`https://princestavernapi.herokuapp.com/update`, {
            user: {
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }
            }, {
                withCredentials: true
            }).then(response => {
                console.log("new password response", response)
                history.push('/login')
            }).catch(error => {
                console.log("new password error", error)
                history.push('/login')
            })
        }


    if(!userConfirmed){
        return (
            <Form onSubmit={handleCodeSubmit}>
                <Form.Group as={Col}>
                    <Form.Label>Code</Form.Label>
                    <Form.Control type="text" placeholder="Code" className={ codeErr ? "invalid" : ""} value={userInput} onChange={handleUserInputChange} />
                    { codeErr ? <p className="invalid-text">Code does not match</p> : ""}
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
    } else {
        return (
            <Form onSubmit={handlePasswordSubmit}>
                <Form.Group as={Col}>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>New Password Confirmation</Form.Label>
                    <Form.Control type="password" placeholder="Password Confirmation" name="password_confirmation" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} required />
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
}

export default ForgottenResponse
