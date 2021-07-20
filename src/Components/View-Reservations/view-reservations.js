import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

const ViewReservations = () => {

    const [reservations, setReservations] = useState([])

    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
           "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]

    useEffect(() => {
        axios.get("https://princestavernapi.herokuapp.com//reservations")
            .then(res => {
                let firstArr = res.data.reservations
                let arr = []
                firstArr.forEach(obj => {
                    arr.push({
                        date: new Date(parseInt(`${obj.date[0]}${obj.date[1]}${obj.date[2]}${obj.date[3]}`), (parseInt(`${obj.date[5]}${obj.date[6]}`)), parseInt(`${obj.date[8]}${obj.date[9]}`), parseInt(`${obj.time[0]}${obj.time[1]}`), parseInt(`${obj.time[3]}${obj.time[4]}`)),
                        time: obj.time,
                        phone_number: obj.phone_number,
                        count: obj.count,
                        id: obj.id })
                    })
                    let sortedArr = arr.sort((obj1, obj2) => {
                        return obj1.date - obj2.date
                })
                setReservations(sortedArr)
            }).catch(err => {
                console.log("reservations response", err)
            })
    }, [])

    return (
        <Accordion>
            <React.Fragment>
                <Accordion.Toggle variant="link" eventKey="2" className="admin-acord">
                    <div className="new-event-drop">
                        <h2>View Reservations</h2>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2" className="acord">
                    <div>
                        {reservations.map(reservation => {
                            return (
                                <div className="user-res" key={reservation.id}>
                                    <div className="user-res-left">
                                        <p>{  months[((new Date(reservation.date)).getMonth()) - 1] }</p>
                                        <p>{ ((new Date(reservation.date)).getDate()) }</p>
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
                                            <p className="bold">Customer Phone:</p>
                                            <p>{reservation.phone_number}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Accordion.Collapse>
            </React.Fragment>
        </Accordion>
    )
}

export default ViewReservations
