import React from 'react'
import MenuCategory from '../Components/menu-category/menu-category';
import Navbar from '../Components/Navbar/navbar';

const Menu = ({loggedInStatus, handleLogout}) => {

    return (
        <div className="menu-page">
            <Navbar active="menu"  loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            <div className="menu-containers">
                <MenuCategory category="Sides"/>
                <MenuCategory category="Mains"/>
            </div>
        </div>
    )
}

export default Menu
