import React, { useEffect, useState } from 'react';
import ForgottenForm from '../Components/Forgotten-form/forgotten-form';
import ForgottenResponse from '../Components/Forgotten-response/forgotten-response';
import Navbar from '../Components/Navbar/navbar';

const ForgottenPassword = ({ loggedInStatus, handleLogout }) => {

    const [code, setCode] = useState(1234)
    const [codeSubmitted, setCodeSubmitted] = useState(false)
    const [email, setEmail] = useState("")
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleCodeSubmitted = () => {
        setCodeSubmitted(true)
    }

    useEffect(() => {
        setCode(`${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`)
    }, [])   
    
    return (
        <div>
            <Navbar active='login' loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            <div className="form-container">
                <h2>Forgot Password</h2>
                {!codeSubmitted && <ForgottenForm code={code} handleCodeSubmitted={handleCodeSubmitted} handleEmailChange={handleEmailChange} email={email} />}
                {codeSubmitted && <ForgottenResponse code={code} email={email} />}
            </div>
        </div>
    )
}

export default ForgottenPassword
