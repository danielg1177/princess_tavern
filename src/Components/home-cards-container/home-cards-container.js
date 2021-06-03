import React from 'react'
import HomeCard from '../home-card/home-card'

const HomeCardsContainer = ({ arr }) => {
    return (
        <div className="home-cards-container">
            {arr.map((card) => {
                return <HomeCard path={card.path} name={card.name} img={card.img} key={card.id} id={card.id} />
            })}
            {/* <HomeCard path="#" name="Directions" num={2}/> */}
        </div>
    )
}

export default HomeCardsContainer
