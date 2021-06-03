import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({path, name, img, id}) => {
    return (
        <div className={`home-card home-card${id}`} key={`homecard${id}`} style={{ backgroundImage: `url('${img}')` }}>
            <div className="home-card-link-container" >
                <Link to={`${path}`} className="home-card-link">{name}</Link>
            </div>
        </div>
    )
}

export default HomeCard
