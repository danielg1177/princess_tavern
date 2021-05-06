import React from 'react';
import logo from '../../images/logo.png';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-info">
                <img src={logo} className="banner-logo" />
                <div className="banner-description">
                    <h1>Prince's Tavern</h1>
                    <p>Whatever moto or catchphrase or whatever</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
