import React from 'react';
import NewEvent from '../Components/New-event/new_event';
import Navbar from '../Components/Navbar/navbar';
import NewMenu from '../Components/New-menu/new-menu';
import DeleteMenu from '../Components/Delete-menu/delete-menu';
import DeleteEvent from '../Components/Delete-event/delete-event';
import ViewReservations from '../Components/View-Reservations/view-reservations';


const Admin = ({loggedInStatus, handleLogout}) => {
    return (
        <div>
            <Navbar active=""  loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            <div className="form-container">
                <h2>Change Database</h2>
                <ViewReservations />
                <NewEvent />
                <DeleteEvent />
                <NewMenu />
                <DeleteMenu />
            </div>
        </div>
    )
}

export default Admin
