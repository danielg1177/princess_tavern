import React from 'react'
import MenuCategory from '../Components/menu-category/menu-category';
import Navbar from '../Components/Navbar/navbar';

const Menu = () => {

    return (
        <div className="menu-page">
            <Navbar active="menu"/>
            <div className="menu-containers">
                <MenuCategory title="Appetizers"/>
                <MenuCategory title="Mains"/>
            </div>
        </div>
    )
}

export default Menu
