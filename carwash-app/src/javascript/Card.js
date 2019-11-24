import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import './../stylesheet/Card.css'

class CardElement extends React.Component {
    render() {
        return (
            <Card style={{ width: '100%', 'margin-top': '2rem' }}>
                <Card.Body>
                    <Row>
                        <Col md={4}>
                            <image src={`${process.env.PUBLIC_URL}/images/lc500.jpg`} className='card-image'></image>
                        </Col>
                        <Col md={8}>
                            <Card.Title>
                                <Row>
                                    <Col md={6} className="card-title-car">LC500</Col>
                                    <Col md={6} className="card-title-maker">LEXUS</Col>
                                </Row>
                            </Card.Title>
                            <hr />
                            <Card.Text>
                                状態：O<br />
                                前回洗車： 2019/11/18
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default CardElement;