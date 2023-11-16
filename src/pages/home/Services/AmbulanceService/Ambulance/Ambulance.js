import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Ambulance = ({ ambulance }) => {
    const { name, img, type, cost } = ambulance;
    return (
        <Col>
            <Card className="shadow-lg h-100 service card-color">
                <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="250px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Type : {type} BDT</p>
                        <h4>Cost : {cost} BDT</h4>
                    </Card.Text>
                    <button className="btn btn-primary w-100 rounded mb-2">For Details Call: +99999988</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Ambulance;