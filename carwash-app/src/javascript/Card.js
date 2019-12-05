import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import './../stylesheet/Card.css'

class CardElement extends React.Component {
    render() {
        return (
            <Card style={{ width: '100%', 'margin-top': '2rem' }}>
                <Card.Body>
                    <Row>
                        <Col lg={4} md={12} sm={12} xs={12}>
                            <img src={`${process.env.PUBLIC_URL}/images/lc500.jpg`} className='card-image'></img>
                        </Col>
                        <Col lg={8} md={12} sm={12} xs={12}>
                            <Card.Title>
                                <Row>
                                    <Col md={6} className="card-title-car">LC500</Col>
                                    <Col md={6} className="card-title-maker">LEXUS</Col>
                                </Row>
                            </Card.Title>
                            <hr />
                            <Card.Text>
                                状態：O<br />
                                2019/11/18 から7日経過
                            </Card.Text>
                        </Col>
                    </Row>
                    <hr />
                    <Card.Title　className="text-left">
                        <h3>水洗い洗車</h3>
                    </Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={12} lg={4}>
                                目安時期：　12月1日
                            </Col>
                            <Col md={12} lg={4}>
                                前回作業：　11月18日
                            </Col>
                            <Col md={8} lg={3}>
                                作業間隔：　10日
                            </Col>
                            <Col md={4} lg={1} className="text-right">
                                <img src={`${process.env.PUBLIC_URL}/images/icon/edit-24px.svg`} style={{ height: "100%" }}/>
                            </Col>
                        </Row>
                    </Card.Text>
                    <hr />
                    <Card.Title className="text-left">
                        <h3>コーディング状態</h3>
                    </Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={12} lg={4}>
                                ウィンドウガラス
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardElement;