import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Button, Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';

class MyOrders extends Component {

    render() {
        return (
            <>
                <Navigation history={this.props.history} />
                <Nav className="justify-content-center" style={{padding:'5%',backgroundColor:'#F5F0E5'}}>
                    <h3 className="text-center" style={{ fontweight: 'bold', textTransform: 'uppercase' }}>My Order</h3>
                </Nav>
                <Card className="pb-5 pt-5">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Unpaid</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Paid</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Rejected</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">Completed</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Card style={{backgroundColor:'#F5F0E5'}} className="mb-5">
                                        <Card.Header style={{backgroundColor:'#F5F0E5'}}>
                                            <span style={{float: 'left', fontVariant: 'uppercase' , fontWeight: 'bold'}}>ORDER ID : IV87899</span>
                                            <span style={{float: 'right', fontWeight: 'bold'}}>28-02-2021</span>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card style={{maxHeight: '540px', overflowY: 'auto', border: 'none', backgroundColor:'#F5F0E5' }}>
                                                <Card className="mb-3" style={{border: 'hidden', backgroundColor:'#F5F0E5'}} >
                                                    <Row className="no-gutters">
                                                        <Col md="2">
                                                            <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img">
                                                                <title>Placeholder</title>
                                                                <rect width="100%" height="100%" fill="#868e96"/>
                                                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                                                            </svg>
                                                        </Col>
                                                        <Col md="10">
                                                            <Card.Body>
                                                                <h5 className="card-title">Special Signature Cake</h5>
                                                                <Row>
                                                                    <Col md="2">
                                                                        <p>Whole Cake</p>
                                                                    </Col>
                                                                    <Col md="2">
                                                                        20x20
                                                                    </Col>
                                                                    <Col md="3">
                                                                        Classic(Free 2 Candles)
                                                                    </Col>
                                                                    <Col md="4">
                                                                        RP. 355.000
                                                                    </Col>
                                                                    <Col md="1">
                                                                        2x
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Card>
                                            <hr className="mt-3 mb-3" />
                                            <Card style={{maxHeight: '540px', overflowY: 'auto', border: 'none', backgroundColor:'#F5F0E5' }}>
                                                <Card className="mb-3" style={{border: 'hidden', backgroundColor:'#F5F0E5'}} >
                                                    <Row className="no-gutters">
                                                        <Col md="2">
                                                            <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img">
                                                                <title>Placeholder</title>
                                                                <rect width="100%" height="100%" fill="#868e96"/>
                                                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                                                            </svg>
                                                        </Col>
                                                        <Col md="10" style={{backgroundColor:'#F5F0E5'}}>
                                                            <Card.Body>
                                                                <h5 className="card-title">Special Signature Cake</h5>
                                                                <Row>
                                                                    <Col md="2">
                                                                        <p>Whole Cake</p>
                                                                    </Col>
                                                                    <Col md="2">
                                                                        20x20
                                                                    </Col>
                                                                    <Col md="3">
                                                                        Classic(Free 2 Candles)
                                                                    </Col>
                                                                    <Col md="4">
                                                                        RP. 355.000
                                                                    </Col>
                                                                    <Col md="1">
                                                                        2x
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Card>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{backgroundColor:'#F5F0E5'}}>
                                        <Card.Header style={{backgroundColor:'#F5F0E5'}}>
                                            <span style={{float: 'left', fontVariant: 'uppercase' , fontWeight: 'bold'}}>ORDER ID : IV87899</span>
                                            <span style={{float: 'right', fontWeight: 'bold'}}>28-02-2021</span>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card style={{maxHeight: '540px', overflowY: 'auto', border: 'none', backgroundColor:'#F5F0E5' }}>
                                                <Card className="mb-3" style={{border: 'hidden', backgroundColor:'#F5F0E5'}} >
                                                    <Row className="no-gutters">
                                                        <Col md="2">
                                                            <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img">
                                                                <title>Placeholder</title>
                                                                <rect width="100%" height="100%" fill="#868e96"/>
                                                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                                                            </svg>
                                                        </Col>
                                                        <Col md="10">
                                                            <Card.Body>
                                                                <h5 className="card-title">Special Signature Cake</h5>
                                                                <Row>
                                                                    <Col md="2">
                                                                        <p>Whole Cake</p>
                                                                    </Col>
                                                                    <Col md="2">
                                                                        20x20
                                                                    </Col>
                                                                    <Col md="3">
                                                                        Classic(Free 2 Candles)
                                                                    </Col>
                                                                    <Col md="4">
                                                                        RP. 355.000
                                                                    </Col>
                                                                    <Col md="1">
                                                                        2x
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Card>
                                            <hr className="mt-3 mb-3" />
                                            <Card style={{maxHeight: '540px', overflowY: 'auto', border: 'none', backgroundColor:'#F5F0E5' }}>
                                                <Card className="mb-3" style={{border: 'hidden', backgroundColor:'#F5F0E5'}} >
                                                    <Row className="no-gutters">
                                                        <Col md="2">
                                                            <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img">
                                                                <title>Placeholder</title>
                                                                <rect width="100%" height="100%" fill="#868e96"/>
                                                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                                                            </svg>
                                                        </Col>
                                                        <Col md="10" style={{backgroundColor:'#F5F0E5'}}>
                                                            <Card.Body>
                                                                <h5 className="card-title">Special Signature Cake</h5>
                                                                <Row>
                                                                    <Col md="2">
                                                                        <p>Whole Cake</p>
                                                                    </Col>
                                                                    <Col md="2">
                                                                        20x20
                                                                    </Col>
                                                                    <Col md="3">
                                                                        Classic(Free 2 Candles)
                                                                    </Col>
                                                                    <Col md="4">
                                                                        RP. 355.000
                                                                    </Col>
                                                                    <Col md="1">
                                                                        2x
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Card>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Card style={{backgroundColor:'#F5F0E5'}}>
                                        <Card.Header style={{backgroundColor:'#F5F0E5'}}>
                                            <span style={{float: 'left', fontVariant: 'uppercase' , fontWeight: 'bold'}}>ORDER ID : IV87899</span>
                                            <span style={{float: 'right', fontWeight: 'bold'}}>28-02-2021</span>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card style={{maxHeight: '540px', overflowY: 'auto', border: 'none', backgroundColor:'#F5F0E5' }}>
                                                <Card className="mb-3" style={{border: 'hidden', backgroundColor:'#F5F0E5'}} >
                                                    <Row className="no-gutters">
                                                        <Col md="2">
                                                            <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img">
                                                                <title>Placeholder</title>
                                                                <rect width="100%" height="100%" fill="#868e96"/>
                                                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                                                            </svg>
                                                        </Col>
                                                        <Col md="10">
                                                            <Card.Body>
                                                                <h5 className="card-title">Special Signature Cake</h5>
                                                                <Row>
                                                                    <Col md="2">
                                                                        <p>Whole Cake</p>
                                                                    </Col>
                                                                    <Col md="2">
                                                                        20x20
                                                                    </Col>
                                                                    <Col md="3">
                                                                        Classic(Free 2 Candles)
                                                                    </Col>
                                                                    <Col md="4">
                                                                        RP. 355.000
                                                                    </Col>
                                                                    <Col md="1">
                                                                        2x
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Card>
                                            <hr className="mt-3 mb-3" />
                                            <Card style={{maxHeight: '540px', overflowY: 'auto', border: 'none', backgroundColor:'#F5F0E5' }}>
                                                <Card className="mb-3" style={{border: 'hidden', backgroundColor:'#F5F0E5'}} >
                                                    <Row className="no-gutters">
                                                        <Col md="2">
                                                            <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img">
                                                                <title>Placeholder</title>
                                                                <rect width="100%" height="100%" fill="#868e96"/>
                                                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                                                            </svg>
                                                        </Col>
                                                        <Col md="10" style={{backgroundColor:'#F5F0E5'}}>
                                                            <Card.Body>
                                                                <h5 className="card-title">Special Signature Cake</h5>
                                                                <Row>
                                                                    <Col md="2">
                                                                        <p>Whole Cake</p>
                                                                    </Col>
                                                                    <Col md="2">
                                                                        20x20
                                                                    </Col>
                                                                    <Col md="3">
                                                                        Classic(Free 2 Candles)
                                                                    </Col>
                                                                    <Col md="4">
                                                                        RP. 355.000.000
                                                                    </Col>
                                                                    <Col md="1">
                                                                        2x
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Card>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Card>
                <Footer  history={this.props.history} />
            </>
        );
    }
}

export default MyOrders;