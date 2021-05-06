import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home';
import ReactRouterSetup from './Components/ReactRouterSetup/ReactRouterSetup';

const App = () => {
    return (
        <Router style={{ width: '100%'}}>
            <ReactRouterSetup />
        </Router>
    )
}

export default App
