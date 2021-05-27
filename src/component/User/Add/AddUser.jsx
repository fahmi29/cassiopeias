import React, {Component} from 'react';
import { Accordion, Button, Card, Col, Collapse, Form, InputGroup, Nav, Row, Table } from 'react-bootstrap';
import Navigation from "../../Navigation/Navigation";
import MapContainer from '../../Maps/Map';

class AddUser extends Component {
    constructor(props){
        super(props);
    }
    changeURL(url){
        this.props.history.push(url)
    }
    render(){
        return(
            <>
                <Navigation history={this.props.history} />
                <Row style={{marginRight: 0}}>
                    <Col xs={2} id="sidebar-wrapper">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link onClick={() => {this.changeURL('/dashboard')}}>Dashboard</Nav.Link>
                            <Nav.Link eventKey="link-1">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">Master Data</Accordion.Toggle><Accordion.Collapse eventKey="0">
                                        <>
                                            <Nav.Link onClick={() => {this.changeURL('/user')}}>Users</Nav.Link>
                                            <Nav.Link onClick={() => {this.changeURL('/product')}}>Product</Nav.Link>
                                            <Nav.Link onClick={() => {this.changeURL('/stores')}}>Stores</Nav.Link>
                                            <Nav.Link onClick={() => {this.changeURL('/payment')}}>Payment</Nav.Link>
                                        </>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Nav.Link>
                            <Nav.Link eventKey="link-2">Transaction</Nav.Link>
                            <Nav.Link eventKey="link-3">Report</Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={10} id="page-conternt-wrapper" style={{backgroundColor:'#F5F0E5'}}>
                        <div style={{padding:'3%'}}>
                            <Row>
                                <Col md={12}>
                                    <h4>Add User</h4>
                                </Col>
                            </Row>
                        </div>
                        <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h5 className="card-title" style={{color: '#ad6600', marginLeft: '20%', paddingTop: '3%', paddingBottom: '3%'}}>Personal Details</h5>
                                    </Col>
                                    <Col>
                                        <h5 className="card-title" style={{color: '#ad6600', marginLeft: '11%', paddingTop: '3%', paddingBottom: '3%'}}>Address</h5>
                                    </Col>
                                </Row>
                                <Form>
                                    <Row>
                                        <Col style={{marginLeft: '10%'}}>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>First Name <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Last Name <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Group>
                                                <Form.Label>Phone Number <i style={{color: 'red'}}>*</i></Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Email <i style={{color: 'red'}}>*</i></Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Gender <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control as="select">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </Form.Control>
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Date of Birth <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Form.Row>
                                        </Col>
                                        <Col>
                                        <Form>
                                            <Form.Group style={{paddingBottom: '50%'}}>
                                                <Form.Label>Maps</Form.Label>
                                                <MapContainer />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Address <i style={{color: 'red'}}>*</i></Form.Label>
                                                <Form.Control as="textarea" />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Province <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control placeholder="First Name" onChange={(event) => { this.setState({ first_name: event.target.value, }); }} />
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>City <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control placeholder="Last Name" onChange={(event) => { this.setState({ last_name: event.target.value, }); }} />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Zip Code <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control placeholder="First Name" onChange={(event) => { this.setState({ first_name: event.target.value, }); }} />
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Address Type <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control placeholder="Last Name" onChange={(event) => { this.setState({ last_name: event.target.value, }); }} />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group>
                                                <Form.Label>Latitude <span style={{color: 'red'}}>(Automatic from Map)</span></Form.Label>
                                                <Form.Control />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Longitude <span style={{color: 'red'}}>(Automatic from Map)</span></Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                            
                                            <Button variant="dark" onClick={() => { this.register(); }} style={{float: 'right'}}>
                                                Save
                                            </Button>
                                        </Form>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default AddUser;