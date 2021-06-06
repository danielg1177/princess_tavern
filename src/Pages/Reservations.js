import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/navbar';
import ReservationsGrid from '../Components/Reservations-grid/reservations-grid';
import HomeCardsContainer from '../Components/home-cards-container/home-cards-container'
import UserReservations from '../Components/User-Reservations/user-reservations';

const Reservations = ({ loggedInStatus, handleLogout }) => {
    const width = window.innerWidth;
    const breakpoint = 768
    

    const arr = [{ path: "/reservation-form-page", name: "Reserve", num: 1, img: 'https://images.unsplash.com/photo-1599635347301-07527a97e718?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzZXJ2ZWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' }, 
    { path: "#", name: "Schedule Event", num: 2, img: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}]

    

    return (
        <div>
            <Navbar active="reservations" handleLogout={handleLogout} loggedInStatus={loggedInStatus} />
            <div className="margin-top">
                <h2>Reservations</h2>
                {(loggedInStatus.loggedInStatus === "LOGGED_IN") && <UserReservations loggedInStatus={loggedInStatus} />}
                { width > breakpoint ? <ReservationsGrid /> : <HomeCardsContainer arr={arr}/> }
            </div> 
        </div>
    )
}

export default Reservations
