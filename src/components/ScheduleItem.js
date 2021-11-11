import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ScheduleItem = ({schedules, onDelete}) => {
    return (
        <Container>
            <Card className="my-3">
                <Card.Body>
                    <Card.Title>{schedules.title} ({schedules.datetime})</Card.Title>
                    <Card.Text>
                       {schedules.desc}
                    </Card.Text>
                    <Button variant="dark" onClick={()=>{onDelete(schedules)}}>Delete.</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ScheduleItem
