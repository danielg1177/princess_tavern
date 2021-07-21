import React from 'react';
import Gordon1 from '../../images/Gordon1.jpeg';
import Gordon2 from '../../images/Gordon2.jpeg';

const AboutUsFirst = () => {
    return (
        <div className="about-us-first-container">
            <div className="person-container">
                <div className="person-img">
                    <img src={Gordon1} alt="" />
                </div>
                <div className="person-info">
                    <h4>Daniel Gordon</h4>
                    <p>A roasted smokey flavor that leaves you as dumbfounded as if you've just witnessed an epic show of illusion. Except there's also a magical chocolate aftertaste too. Can you taste the roasted flavors? Feel the sweetness and bitterness gently embracing your taste buds? Great, because while you weren't paying attention we finished off your beer. That's just how it is when you're distracted by a unique flavors. Black Jack, a mysteriously magical stout.</p>
                </div>
            </div>
            <div className="person-container2">
                <div className="person-img">
                    <img src={Gordon2} alt="" />
                </div>
                <div className="person-info">
                    <h4>Lessons from this project</h4>
                    <p>Dont build websites for friends...</p>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsFirst
