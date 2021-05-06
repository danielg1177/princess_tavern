import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import Home from '../../Pages/Home'
import logo from '../../images/logo.png'

const Navbar = ({ active }) => {
    const [isActiveHome, setIsActiveHome] = useState(false)
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    const [isActiveAboutUs, setIsActiveAboutUs] = useState(false)
    const [isActiveScheduledEvents, setIsActiveScheduledEvents] = useState(false)
    const [isActiveReservations, setIsActiveReservations] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleActive = () => {
        if(active === 'menu') {
            setIsActiveMenu(true)
        } else if (active === 'home') {
            setIsActiveHome(true)
        } else if (active === 'about-us') {
            setIsActiveAboutUs(true)
        } else if (active === 'scheduled-events') {
            setIsActiveScheduledEvents(true)
        } else if (active === 'reservations') {
            setIsActiveReservations(true)
        }
    }

    useEffect(() => {
        toggleActive()
    }, [])

    const navSlide = () => {
        let value = isNavOpen ? false : true
        setIsNavOpen(value)
    }

    useEffect(() => {
        toggleActive()
    }, [isNavOpen])

    return ( 
        <div className="navbar-container">
            <img src={logo} alt="Logo"/>
            <div className="navbar-options">
                <ul className={isNavOpen ? `nav-active navbar-list` : `navbar-list`}>
                    <li><Link className={isActiveHome ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/">Home</Link></li>
                    <li><Link className={isActiveMenu ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/menu">Menu</Link></li>
                    <li><Link className={isActiveAboutUs ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/about-us">About Us</Link></li>
                    <li><Link className={isActiveScheduledEvents ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/scheduled-events">Scheduled Events</Link></li>
                    <li><Link className={isActiveReservations ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/reservations">Reservations</Link></li>
                </ul>
                <div className={isNavOpen ? 'burger' : 'burger'} onClick={navSlide}>
                    <div className={isNavOpen ? "line1 toggle" : "line1"}></div>
                    <div className={isNavOpen ? "line2 toggle" : "line2"}></div>
                    <div className={isNavOpen ? "line3 toggle" : "line3"}></div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar
