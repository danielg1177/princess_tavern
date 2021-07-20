import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";

const UserReservations = ({ loggedInStatus }) => {
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
           "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]

    const [userReservationsArr, setUserReservationsArr] = useState([])

    useEffect(() => {
        if (loggedInStatus.loggedInStatus === "LOGGED_IN"){
            axios.get("https://princestavernapi.herokuapp.com/reservations")
                .then(res => {
                    let firstArr = res.data.reservations.filter(reservation => {
                        return reservation.user_id === loggedInStatus.user.id
                    })
                    let arr = []
                    firstArr.forEach(obj => {
                        arr.push({
                            date: new Date(parseInt(`${obj.date[0]}${obj.date[1]}${obj.date[2]}${obj.date[3]}`), parseInt(`${obj.date[5]}${obj.date[6]}`), parseInt(`${obj.date[8]}${obj.date[9]}`), parseInt(`${obj.time[0]}${obj.time[1]}`), parseInt(`${obj.time[3]}${obj.time[4]}`)),
                            time: obj.time,
                            phone_number: obj.phone_number,
                            count: obj.count,
                            id: obj.id })
                        })
                        let sortedArr = arr.sort((obj1, obj2) => {
                            return obj1.date - obj2.date
                    })
                    setUserReservationsArr(sortedArr)
                }).catch(err => {
                    console.log("reservations response", err)
            })
        }
    }, [])

    if(userReservationsArr.length > 0){
        return (
            <div className="user-res-container">
                <h2>Your Upcoming Reservations</h2>
                {userReservationsArr.map(reservation => {
                    return (
                        <div className="user-res" key={reservation.id}>
                            <div className="user-res-left">
                                <p>{  months[((reservation.date).getMonth()) - 1] }</p>
                                <p>{ ((reservation.date).getDate()) }</p>
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
    } else {
        return (
            <div>
                <h2>Reservations</h2>
            </div>
        )
    }
}

export default UserReservations
