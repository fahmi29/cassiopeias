import React,{ Component } from "react";
import Navigation from "../Navigation/Navigation";
import gerigi from '../../components/image/cogwheel-hand-drawn-tool.svg';
import users from "../../components/image/users.png";
import { Card, Form, Image, Col, Row, Button, Nav } from "react-bootstrap";
import MapContainer from "../Maps/Map";
import Footer from "../Footer/Footer";

class Profile extends Component {
    render(){
        return(
            <>
                <Navigation history={this.props.history} />
                <Nav style={{backgroundColor:'#F5F0E5'}}>
                    <h3 style={{marginLeft: '10%', paddingTop: '3%',paddingBottom: '3%'}}>
                        <Image src={gerigi} width="40" height="40" />
                            MY PROFILE
                    </h3>
                </Nav>
                <Card>
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
                                    <Image src={users} style={{width: '123px', height: '123px'}} />
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
                <Footer  history={this.props.history} />
            </>
        );
    }
}

export default Profile;