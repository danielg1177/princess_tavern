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
                    <p className="person-titles"><span>Military Leadership</span></p>
                    <p>Spent three years serving in an anti terror special operations unit in the Israeli army.</p>
                    <p className="person-titles"><span>Self Taught</span></p>
                    <p>Spent the next year and a half studying software engineering honing my skills in javascript, HTML, CSS, SQL and React</p>
                </div>
            </div>
            <div className="person-container2">
                <div className="person-img">
                    <img src={Gordon2} alt="" />
                </div>
                <div className="person-info">
                    <p className="person-titles"><span>Le Wagon Web Development Course</span></p>
                    <p>A 9 intensive week bootcamp focusing on Javascript, Ruby, Rails, Bootstrap, SQL, PostgreSQL and git workflow</p>
                    <p className="person-titles"><span>This</span></p>
                    <p>Look around, try changing events and menu items at the Princes Tavern <a href="http://princes-tavern.herokuapp.com/admin">admin page</a></p>
                    <p className="person-titles"><span>Hashuk (Current Employment)</span></p>
                    <p>A startup inventory managment system aimed to help small buisness owners with overall productivy. Built in PHP using Laravel, Livewire and Tailwind CSS</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsFirst
