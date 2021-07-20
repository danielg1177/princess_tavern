import React, { useEffect, useState } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Home from '../../Pages/Home'
import Menu from '../../Pages/Menu'
import AboutUs from '../../Pages/About-us'
import Reservations from '../../Pages/Reservations'
import SchedueledEvents from '../../Pages/Schedueled-events'
import Reservation from '../../Pages/Reservations'
import ReservationFormPage from '../../Pages/Reservation-form-page'
import Admin from '../../Pages/Admin'
import Login from '../../Pages/Login'
import history from '../../Helpers/history';
import axios from 'axios';
import EditReservationForm from '../Edit-reservation-form/edit-reservation-form'
import ForgottenPassword from '../../Pages/Forgotten-password'
import EditReservation from '../../Pages/Edit-reservation'

const ReactRouterSetup = () => {
    const [loggedIn, setLoggedIn] = useState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
    })

    const handleLogin = (data) => {
        setLoggedIn({
            loggedInStatus: "LOGGED_IN",
            user: data.user
        })
    }

    const handleLogout = () => {
        axios.delete("https://princestavernapi.herokuapp.com/logout", { withCredentials: true }).then(response => {
            console.log("logout response", response)
        }).catch(error => {
            console.log("logout error", error)
        })
        setLoggedIn({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        })
        history.push('/')
    }

    const checkLoginStatus = () => {
        axios.get("https://princestavernapi.herokuapp.com/logged_in", { withCredentials: true }).then(response => {
            if(response.data.logged_in && loggedIn.loggedInStatus === "NOT_LOGGED_IN") {
                setLoggedIn({
                    loggedInStatus: "LOGGED_IN",
                    user: response.data.user
                })
            } else if(!response.data.logged_in && loggedIn.loggedInStatus === "LOGGED_IN") {
               setLoggedIn({
                    loggedInStatus: "NOT_LOGGED_IN",
                    user: {}
                })
            }
        }).catch(error => {
            console.log("login error", error)
        })
    }

    useEffect(() => {
        checkLoginStatus()
    }, [])


    return (
        <Router history={history}>
            <Switch style={{ width: '100%'}}>
                <Route exact path="/" style={{ width: '100%'}} render={props => (
                    <Home {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/about-us" render={props => (
                    <AboutUs {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/menu" render={props => (
                    <Menu {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/reservations" render={props => (
                    <Reservations {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/scheduled-events" render={props => (
                    <SchedueledEvents {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/reservation" render={props => (
                    <Reservation {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/reservation-form-page" render={props => (
                    <ReservationFormPage {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/login">
                    <Login handleLogin={handleLogin}  loggedInStatus={loggedIn} handleLogout={handleLogout} />
                </Route>
                <Route path="/admin" render={props => (
                    <Admin {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/edit-reservation/:id" render={props => (
                    <EditReservation {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
                <Route path="/forgotten" render={props => (
                    <ForgottenPassword {...props} loggedInStatus={loggedIn} handleLogout={handleLogout} />
                )}>
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterSetup
