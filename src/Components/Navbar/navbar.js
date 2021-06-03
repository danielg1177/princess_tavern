import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const Navbar = ({ active, loggedInStatus, handleLogout }) => {
    const [isActiveHome, setIsActiveHome] = useState(false)
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    const [isActiveAboutUs, setIsActiveAboutUs] = useState(false)
    const [isActiveScheduledEvents, setIsActiveScheduledEvents] = useState(false)
    const [isActiveReservations, setIsActiveReservations] = useState(false)
    const [isLogIn, setIsLogIn] = useState(false)
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
        } else if (active === 'login') {
            setIsLogIn(true)
        }
    }

    useEffect(() => {
        toggleActive()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navSlide = () => {
        let value = isNavOpen ? false : true
        setIsNavOpen(value)
    }

    useEffect(() => {
        toggleActive()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isNavOpen])

    return ( 
        <div className="navbar-container">
            <img src={logo} alt="Logo"/>
            <div className="navbar-options">
                <ul className={isNavOpen ? `nav-active navbar-list` : `navbar-list`}>
                    <li className="nav-item"><Link className={isActiveHome ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/">Home</Link></li>
                    <li className="nav-item"><Link className={isActiveMenu ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/menu">Menu</Link></li>
                    <li className="nav-item"><Link className={isActiveAboutUs ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/about-us">About Us</Link></li>
                    <li className="nav-item"><Link className={isActiveScheduledEvents ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/scheduled-events">Scheduled Events</Link></li>
                    <li className="nav-item"><Link className={isActiveReservations ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/reservations">Reservations</Link></li>
                    {loggedInStatus.loggedInStatus === "NOT_LOGGED_IN" && <li classname="nav-item"><Link className={isLogIn ? `active link${isNavOpen ? " animate" : ""}` : `link${isNavOpen ? " animate" : ""}`} to="/login">Sign In</Link></li>}
                    {loggedInStatus.loggedInStatus === "LOGGED_IN" && <li classname="nav-item"><p onClick={handleLogout} className={`link${isNavOpen ? " animate" : ""} logout-nav`}>Sign Out</p></li>}
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
