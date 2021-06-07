import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";

const UserReservations = ({ loggedInStatus }) => {
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", 
           "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]

    const [userReservationsArr, setUserReservationsArr] = useState([])

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    useEffect(() => {
        if (loggedInStatus.loggedInStatus === "LOGGED_IN"){
            axios.get("http://localhost:3002/reservations")
                .then(res => {
                    let resArr = res.data.reservations.filter(reservation => {
                        return reservation.user_id === loggedInStatus.user.id
                    })
                    setUserReservationsArr(resArr)
                    if(resArr.length > 1) {
                        let sortedArr = resArr.sort((obj1, obj2) => {
                            return obj1.date - obj2.date
                        })
                        setUserReservationsArr(sortedArr)
                    }
                }).catch(err => {
                    console.log("reservations response", err)
                })
        }
    }, [])

    return (
        <div className="user-res-container">
            <h2>Upcoming Reservations</h2>
            {userReservationsArr.map(reservation => {
                return (
                    <div className="user-res">
                        <div className="user-res-left">
                            <p>{  months[((new Date(reservation.date)).addDays(1).getMonth())] }</p>
                            <p>{ ((new Date(reservation.date)).addDays(1).getDate()) }</p>
                        </div>
                        <div className="user-res-right">
                            <div className="thirty-three-percent">
                                <p className="bold">Time:</p>
                                <p>{reservation.time}</p>
                            </div>
                            <div className="thirty-three-percent">
                                <p className="bold">People:</p>
                                <p>{reservation.count}</p>
                            </div>
                            <div className="thirty-three-percent res-edit">
                                <Link to={`/edit-reservation/${reservation.id}`}><FaRegEdit /></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default UserReservations
