import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import history from '../../Helpers/history';

const ForgottenResponse = ({ code, email }) => {

    const [userInput, setUserInput] = useState('');
    const [userConfirmed, setUserConfirmed] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

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
            console.log(false)
        }
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:3002/update`, {
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
            })
        }

    
    if(!userConfirmed){
        return (
            <Form onSubmit={handleCodeSubmit}>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Code</Form.Label>
                    <Form.Control type="text" placeholder="Code" value={userInput} onChange={handleUserInputChange} required />
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
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
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
