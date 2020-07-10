import React from 'react';
import { Card, Button } from 'react-bootstrap';


const record = (props) => (
    <Card style={{ width: '18rem' }} className="mt-5 pb-5">
        <Card.Img variant="top" src={props.pic} />
        <Card.Body className="d-flex flex-column">
            <Card.Title>{props.artist} - {props.album}</Card.Title>
            {props.tracks.slice(0,3).map(track => (
                <Card.Text>
                    {track}
                </Card.Text>
            ))}
            {props.tracks.length > 3 &&  <Card.Text>
                    . . .
                </Card.Text>}
            <div className="d-flex justify-content-center mt-auto">
                <Button variant="primary">Details</Button>
            </div>
        </Card.Body>
    </Card>
)

export default record