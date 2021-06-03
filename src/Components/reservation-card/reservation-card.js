import React from 'react'
import { Link } from 'react-router-dom'

const ReservationCard = ({ num, title, button, img, link }) => {
    return (
        <div className={`reservation-card${num}`}>
            <div className="reservation-button-container">
                <h4>{title}</h4>
                <Link to={link} className="reservation-form-button">{button}</Link>
            </div>
            <img src={img} alt={title} />
        </div>
    )
}

export default ReservationCard
