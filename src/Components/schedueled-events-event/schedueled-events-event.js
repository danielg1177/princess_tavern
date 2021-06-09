import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const SchedueledEventsEvent = ({month, dotm, title, time, description, url, id}) => {

    return (
        <Accordion key={id}>
            <div>
                {/* <a className="scehdueled-event-dropdown-a" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> */}
                <Accordion.Toggle variant="link" eventKey="0" className="schedueled-events-event">
                    <div className="schedueled-event-date-time">
                        <p className="schedueled-event-date-month">{month}.</p>
                        <p className="schedueled-event-date-day">{dotm}</p>
                    </div>
                    <div className="schedueled-event-info">
                        <img src={url} alt={title}></img>
                        <div className="schedueled-event-title-time">
                            <h4>{title}</h4>
                            <p>{time}</p>
                        </div>
                    </div>
                </Accordion.Toggle>
                {/* </a> */}
                {/* <div class="collapse" id="collapseExample"> */}
                <Accordion.Collapse eventKey="0">
                    <div className="flex-end">
                        <div className="schedueled-event-dropdown">
                            <div className="schedueled-event-dropdown-info">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </Accordion.Collapse>
                {/* </div> */}
            </div>
        </Accordion>

    )
}

export default SchedueledEventsEvent
