import React, { useState } from 'react';
import Registration from '../Components/auth/Registration';
import Navbar from '../Components/Navbar/navbar';
import history from '../Helpers/history'
import LoginForm from '../Components/auth/Login-form'

const Login = ({handleLogin, loggedInStatus, handleLogout}) => {

    const [registration, setRegistration] = useState(false)

    const handleSuccesfulAuth = (data) => {
        handleLogin(data)
        history.push('/')
     }

     const handleToggleClick = () => {
         if(registration === false) {
             setRegistration(true)
         } else {
             setRegistration(false)
         }
     }

    return (
        <div>
            <Navbar active='login' loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            {!registration && <LoginForm handleSuccesfulAuth={handleSuccesfulAuth} handleToggleClick={handleToggleClick} />}
            {registration && <Registration handleSuccesfulAuth={handleSuccesfulAuth} handleToggleClick={handleToggleClick} />}
        </div>
    )
}

export default Login
