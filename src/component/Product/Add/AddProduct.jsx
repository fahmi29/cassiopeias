import React, {Component} from 'react';
import { Accordion, Button, Card, Col, Collapse, Form, InputGroup, Nav, Row, Table } from 'react-bootstrap';
import Navigation from "../../Navigation/Navigation";
import MapContainer from '../../Maps/Map';

class AddProduct extends Component {
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
                        <Row>
                            <Col>
                                <div style={{padding:'3%'}}>
                                    <Row>
                                        <Col md={12}>
                                            <h4>Add Product</h4>
                                        </Col>
                                    </Row>
                                </div>
                                <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                                    <Card.Body>
                                        {/* <Row>
                                            <Col>
                                                <h5 className="card-title" style={{color: '#ad6600', marginLeft: '20%', paddingTop: '3%', paddingBottom: '3%'}}>Personal Details</h5>
                                            </Col>
                                            <Col>
                                                <h5 className="card-title" style={{color: '#ad6600', marginLeft: '11%', paddingTop: '3%', paddingBottom: '3%'}}>Address</h5>
                                            </Col>
                                        </Row> */}
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Product Name <i style={{color: 'red'}}>*</i></Form.Label>
                                                <Form.Control />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Size <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Price <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Category <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control as="select">
                                                        <option></option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>Free Candle <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control as="select">
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Form.Control>
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <Form.Label>Only buy at store? <i style={{color: 'red'}}>*</i></Form.Label>
                                                    <Form.Control as="select">
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group>
                                                <Form.Label>Photos <i style={{color: 'red'}}>*</i></Form.Label>
                                                <Row>
                                                    <Col><Form.Control type="file" /></Col>
                                                    <Col><Form.Control type="file" /></Col>
                                                    <Col><Form.Control type="file" /></Col>
                                                    <Col><Form.Control type="file" /></Col>
                                                </Row>
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Product Description <i style={{color: 'red'}}>*</i></Form.Label>
                                                <Form.Control as="textarea" />
                                            </Form.Group>
                                            
                                            <Button variant="primary" onClick={() => { this.register(); }} style={{float: 'right'}}>
                                                Save
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default AddProduct;