import React, {Component} from 'react';
import { Accordion, Button, Card, Col, Collapse, Form, InputGroup, Nav, Row, Table } from 'react-bootstrap';
import Navigation from "../../Navigation/Navigation";
import MapContainer from '../../Maps/Map';
import TimePicker from "react-bootstrap-time-picker";

class AddStore extends Component {
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
                                    <h4>Add Store</h4>
                                </Col>
                            </Row>
                        </div>
                        <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col}>
                                                <Form.Label>Photo <i style={{color: 'red'}}>*</i></Form.Label>
                                                <Form.Control type="file" />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Label>Store Name <i style={{color: 'red'}}>*</i></Form.Label>
                                                <Form.Control />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Call Center <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Store Hourse <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Row>
                                                        <Col>
                                                            <TimePicker start="00:00" end="23:30" step={30} />
                                                            <span>-</span>
                                                        </Col>
                                                        <Col>
                                                            <TimePicker start="00:00" end="23:30" step={30} />
                                                        </Col>
                                                    </Row>
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

export default AddStore;