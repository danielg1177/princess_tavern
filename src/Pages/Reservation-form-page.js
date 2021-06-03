import React from 'react'
import Navbar from '../Components/Navbar/navbar'
import ReservationForm from '../Components/reservation-form/reservation-form'

const ReservationFormPage = ({ loggedInStatus, handleLogout }) => {
    return (
        <div>
            <Navbar active="log-in" loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            <ReservationForm />
        </div>
    )
}

export default ReservationFormPage
