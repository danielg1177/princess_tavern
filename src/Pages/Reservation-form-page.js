import React from 'react'
import Navbar from '../Components/Navbar/navbar'
import ReservationForm from '../Components/reservation-form/reservation-form'

const ReservationFormPage = ({ loggedInStatus, handleLogout }) => {
    return (
        <div>
            <Navbar active="reservations" loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            {loggedInStatus.loggedInStatus === "LOGGED_IN" && <ReservationForm loggedInStatus={loggedInStatus} />}
            {loggedInStatus.loggedInStatus === "NOT_LOGGED_IN" && (<h2 className="not-logged-in">Must be logged in to make a reservation</h2>)}
        </div>
    )
}

export default ReservationFormPage
