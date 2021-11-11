import React from 'react'
import Container from 'react-bootstrap/Container';
import ScheduleItem from './ScheduleItem';

const Schedules = (props) => {
    return (
        <Container>
            <h6 className="display-6 text-center my-4"> <u> Schedule List. </u> </h6>
            {props.schedules.length === 0 ? "Nothing to display schedule." :
                props.schedules.map((schedules) => {
                    return (<ScheduleItem schedules={schedules} key={schedules.srno} onDelete={props.onDelete} />)
                })}
        </Container>
    )
}

export default Schedules
