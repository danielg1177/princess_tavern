import React from 'react';
import pic from '../../images/bar1.jpg';
import Accordion from 'react-bootstrap/Accordion';

const SchedueledEventsEvent = ({month, dotm, title, time, description, url}) => {

    return (
        <Accordion>
            <div>
                {/* <a className="scehdueled-event-dropdown-a" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> */}
                <Accordion.Toggle variant="link" eventKey="0" className="schedueled-events-event">
                    <div className="schedueled-event-date-time">
                        <p className="schedueled-event-date-month">{month}.</p>
                        <p className="schedueled-event-date-day">{dotm}</p>
                    </div>
                    <div className="schedueled-event-info">
                        <img src={url}></img>
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

{/* <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}