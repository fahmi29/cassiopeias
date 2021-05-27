import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Birthday_cake_chocolate from "../../components/image/chocolate-birthday-cake.jpeg";
import Birthday_cake_custom from "../../components/image/birthday-cake-custom.jpg";
import Birthday_cake_pink from "../../components/image/happy-birthday-cake-pink.jpg";
import Birthday_cake from "../../components/image/happy-birthday-cake.jpg";
import { Link } from 'react-router-dom';

const Cake = (props) => {
    var text = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '76%',
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#ffffff'
    }
    return(
                <Row>
                    <Col sm="3">
                        <Card style={{ width: '18rem', border: 'none' }} className="text-center">
                            <div>
                                <a href="/detail/1"><Card.Img variant="top" src={Birthday_cake_chocolate} style={{height: '20rem', cursor: 'pointer'}} /></a>
                                <div style={text}>
                                    <p style={{marginTop: '50%', border: '1px solid #ffffff', width: '50%', marginLeft: '30%'}}>Out of Stock</p>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title><a href="/Detail/1">REGAL CHOCOLATE</a></Card.Title>
                                <Card.Text>
                                    Rp. 350.000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem', border: 'none' }} className="text-center">
                            <a href="/detail/2"><Card.Img variant="top" src={Birthday_cake_custom} style={{height: '20rem'}} /></a>
                            <Card.Body>
                            <Card.Title><a href="/Detail/2">CHOCOLATE SIGNATURE</a></Card.Title>
                                <Card.Text>
                                    Rp. 365.000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem', border: 'none' }} className="text-center">
                            <Card.Img variant="top" src={Birthday_cake_pink} style={{height: '20rem'}} />
                            <Card.Body>
                                <Card.Title>THAITEA CHEESECAKE</Card.Title>
                                <Card.Text>
                                    Rp. 350.000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card style={{ width: '18rem', border: 'none' }} className="text-center">
                            <div>
                                <Card.Img variant="top" src={Birthday_cake} style={{height: '20rem'}} />
                                <div style={text}>
                                    <p style={{marginTop: '50%', border: '1px solid #ffffff', width: '50%', marginLeft: '30%'}}>Out of Stock</p>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title>MAGNFIQUE</Card.Title>
                                <Card.Text>
                                    Rp. 350.000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
    );
}

export default Cake;