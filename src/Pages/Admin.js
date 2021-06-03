import React from 'react';
import NewEvent from '../Components/New-event/new_event';
import Navbar from '../Components/Navbar/navbar';
import NewMenu from '../Components/New-menu/new-menu';
import DeleteMenu from '../Components/Delete-menu/delete-menu';


const Admin = ({loggedInStatus, handleLogout}) => {
    return (
        <div>
            <Navbar active="menu"  loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            <div className="form-container">
                <h2>Change Database</h2>
                <NewEvent />
                <NewMenu />
                <DeleteMenu />
            </div>
        </div>
    )
}

export default Admin
