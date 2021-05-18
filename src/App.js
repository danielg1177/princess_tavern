import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactRouterSetup from './Components/ReactRouterSetup/ReactRouterSetup';

const App = () => {
    return (
        <Router style={{ width: '100%'}}>
            <ReactRouterSetup />
        </Router>
    )
}

export default App
