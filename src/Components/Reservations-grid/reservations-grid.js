import React, { useState } from 'react'
import ReservationCard from '../reservation-card/reservation-card'

const ReservationsGrid = () => {
    return (
        <div className="reservations-grid">
            <ReservationCard num={1} link="/reservation-form-page" title="Reserve Table" button="Reserve" img="https://images.unsplash.com/photo-1599635347301-07527a97e718?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzZXJ2ZWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
            <ReservationCard num={2} link="#" title="Schedule Event" button="Form" img="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
            {/* <ReservationCard num={1} title="" button="Form" img="https://images.unsplash.com/photo-1491333078588-55b6733c7de6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>  */}
        </div>
    )
}

export default ReservationsGrid
