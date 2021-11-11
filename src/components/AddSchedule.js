import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddSchedule = (props) => {
    const [title, setTitle] = useState("")
    const [datetime, setDatetime] = useState("")
    const [desc, setdesc] = useState("")

    const save = (event) => {
        event.preventDefault();
        if (!title) {
            alert("Title can't be blank.");
        } else if (!datetime) {
            alert("Date and Time can't be blank.");
        } else if (!desc) {
            alert("Description can't be blank.");
        } else {
            props.addSchedule(title, datetime, desc);
            setTitle("");
            setDatetime("");
            setdesc("");
        }
    }
    return (
        <Container className="my-3">
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontSize: "18px" }}>Title : </Form.Label>
                    <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontSize: "18px" }}>Date and Time : </Form.Label>
                    <Form.Control type="datetime-local" value={datetime} onChange={(event) => setDatetime(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{ fontSize: "18px" }}>Description : </Form.Label>
                    <Form.Control as="textarea" value={desc} onChange={(event) => setdesc(event.target.value)} rows={3} />
                </Form.Group>
                <Button variant="dark" type="submit"> Submit. </Button>
            </Form>
        </Container>
    )
}

export default AddSchedule
