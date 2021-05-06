import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../../Pages/Home'
import Menu from '../../Pages/Menu'
import AboutUs from '../../Pages/About-us'
import Reservations from '../../Pages/Reservations'
import SchedueledEvents from '../../Pages/Schedueled-events'
import Reservation from '../../Pages/Reservations'
import ReservationFormPage from '../../Pages/Reservation-form-page'

const ReactRouterSetup = () => {
    return (
        <Switch style={{ width: '100%'}}>
            <Route exact path="/" style={{ width: '100%'}}>
                <Home />
            </Route>
            <Route path="/about-us">
                <AboutUs />
            </Route>
            <Route path="/menu">
                <Menu />
            </Route>
            <Route path="/reservations">
                <Reservations />
            </Route>
            <Route path="/scheduled-events">
                <SchedueledEvents />
            </Route>
            <Route path="/reservation">
                <Reservation />
            </Route>
            <Route path="/reservation-form-page">
                <ReservationFormPage />
            </Route>
        </Switch>      
    )
}

export default ReactRouterSetup
