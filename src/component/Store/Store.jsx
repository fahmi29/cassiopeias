import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import { Form, Row, Col, Card } from "react-bootstrap";

class Store extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <Navigation history={this.props.history} />
                <h3 className="ml-3">All Store (20)</h3>
                <hr style={{width: '13%', borderBottom: '2px solid black'}} className="ml-3" />
                <Form>
                    <Form.Group as={Row}>
                        <Col md={{ span: 1, offset: 7 }}>
                            <Form.Control as="select" defaultValue="D20">
                                <option>Short A to Z</option>
                            </Form.Control>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Form.Control />
                        </Col>
                    </Form.Group>
                </Form>
                <Row>
                    <Col className="ml-3">
                        <Card className="mb-3" style={{maxWidth: '540px'}}>
                            <Row className="no-gutters">
                                <Col md="4">
                                    <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#868e96"/>
                                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                                    </svg>
                                </Col>
                                <Col md="8">
                                    <Card.Body>
                                        <h5 className="card-title" style={{color: '#ac6601'}}>Depok</h5>
                                        <hr style={{width: '13%', borderBottom: '2px solid #ac6601'}} className="ml-1" />
                                        <Row>
                                            <Col md="1">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0C5.37545 0 2.83332 2.54213 2.83332 5.66668C2.83332 6.60467 3.06783 7.53469 3.51365 8.35958L8.19011 16.8174C8.25237 16.9301 8.371 17 8.5 17C8.62899 17 8.74762 16.9301 8.80988 16.8174L13.4881 8.35679C13.9322 7.53469 14.1667 6.60463 14.1667 5.66664C14.1667 2.54213 11.6245 0 8.5 0ZM8.5 8.5C6.93772 8.5 5.66668 7.22895 5.66668 5.66668C5.66668 4.1044 6.93772 2.83336 8.5 2.83336C10.0623 2.83336 11.3333 4.1044 11.3333 5.66668C11.3333 7.22895 10.0623 8.5 8.5 8.5Z" fill="#949494"/></svg>
                                            </Col>
                                            <Col>
                                                Jl. Bintaro Sektor 5 No. 53, Kel. Pondok Ranji, Kec. Ciputat Timur . Kota Tangerang Selatan 15222
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="1">
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M13.7859 11.832C12.8194 10.9536 11.8384 10.4216 10.8837 11.2986L10.3137 11.8287C9.89658 12.2134 9.12109 14.0113 6.12277 10.3466C3.12507 6.68653 4.90895 6.11666 5.32667 5.73519L5.89986 5.20446C6.84956 4.32544 6.49116 3.21886 5.8062 2.07978L5.39285 1.38983C4.70478 0.253399 3.95551 -0.492943 3.00331 0.384755L2.48882 0.862413C2.06798 1.18815 0.891626 2.24696 0.606279 4.25843C0.262865 6.67194 1.34618 9.43572 3.82813 12.4682C6.30696 15.502 8.73396 17.0258 11.033 16.9993C12.9436 16.9774 14.0975 15.8881 14.4584 15.492L14.9747 15.0137C15.9244 14.1367 15.3344 13.2437 14.3672 12.3634L13.7859 11.832Z" fill="#949494"/></g><defs><clipPath id="clip0"><rect width="16" height="17" fill="white"/></clipPath></defs></svg>
                                            </Col>
                                            <Col>
                                                1500581
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="1">
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58862 0 0 3.81291 0 8.5C0 13.1871 3.58862 17 8 17C12.4114 17 16 13.1871 16 8.5C16 3.81291 12.4114 0 8 0ZM11.8047 12.8966C11.6747 13.0347 11.504 13.1042 11.3334 13.1042C11.1627 13.1042 10.9919 13.0347 10.8621 12.8966L7.52869 9.35498C7.40332 9.22256 7.33337 9.04253 7.33337 8.85421V4.25C7.33337 3.85831 7.63196 3.54171 8 3.54171C8.36804 3.54171 8.66663 3.85831 8.66663 4.25V8.56096L11.8047 11.895C12.0653 12.1721 12.0653 12.6197 11.8047 12.8966Z" fill="#949494"/></svg>
                                            </Col>
                                            <Col>
                                                08 AM - 09 PM
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-3" style={{maxWidth: '540px'}}>
                            <Row className="no-gutters">
                                <Col md="4">
                                    <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#868e96"/>
                                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                                    </svg>
                                </Col>
                                <Col md="8">
                                    <Card.Body>
                                        <h5 className="card-title" style={{color: '#ac6601'}}>Depok</h5>
                                        <hr style={{width: '13%', borderBottom: '2px solid #ac6601'}} className="ml-1" />
                                        <Row>
                                            <Col md="1">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0C5.37545 0 2.83332 2.54213 2.83332 5.66668C2.83332 6.60467 3.06783 7.53469 3.51365 8.35958L8.19011 16.8174C8.25237 16.9301 8.371 17 8.5 17C8.62899 17 8.74762 16.9301 8.80988 16.8174L13.4881 8.35679C13.9322 7.53469 14.1667 6.60463 14.1667 5.66664C14.1667 2.54213 11.6245 0 8.5 0ZM8.5 8.5C6.93772 8.5 5.66668 7.22895 5.66668 5.66668C5.66668 4.1044 6.93772 2.83336 8.5 2.83336C10.0623 2.83336 11.3333 4.1044 11.3333 5.66668C11.3333 7.22895 10.0623 8.5 8.5 8.5Z" fill="#949494"/></svg>
                                            </Col>
                                            <Col>
                                                Jl. Bintaro Sektor 5 No. 53, Kel. Pondok Ranji, Kec. Ciputat Timur . Kota Tangerang Selatan 15222
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="1">
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M13.7859 11.832C12.8194 10.9536 11.8384 10.4216 10.8837 11.2986L10.3137 11.8287C9.89658 12.2134 9.12109 14.0113 6.12277 10.3466C3.12507 6.68653 4.90895 6.11666 5.32667 5.73519L5.89986 5.20446C6.84956 4.32544 6.49116 3.21886 5.8062 2.07978L5.39285 1.38983C4.70478 0.253399 3.95551 -0.492943 3.00331 0.384755L2.48882 0.862413C2.06798 1.18815 0.891626 2.24696 0.606279 4.25843C0.262865 6.67194 1.34618 9.43572 3.82813 12.4682C6.30696 15.502 8.73396 17.0258 11.033 16.9993C12.9436 16.9774 14.0975 15.8881 14.4584 15.492L14.9747 15.0137C15.9244 14.1367 15.3344 13.2437 14.3672 12.3634L13.7859 11.832Z" fill="#949494"/></g><defs><clipPath id="clip0"><rect width="16" height="17" fill="white"/></clipPath></defs></svg>
                                            </Col>
                                            <Col>
                                                1500581
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="1">
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58862 0 0 3.81291 0 8.5C0 13.1871 3.58862 17 8 17C12.4114 17 16 13.1871 16 8.5C16 3.81291 12.4114 0 8 0ZM11.8047 12.8966C11.6747 13.0347 11.504 13.1042 11.3334 13.1042C11.1627 13.1042 10.9919 13.0347 10.8621 12.8966L7.52869 9.35498C7.40332 9.22256 7.33337 9.04253 7.33337 8.85421V4.25C7.33337 3.85831 7.63196 3.54171 8 3.54171C8.36804 3.54171 8.66663 3.85831 8.66663 4.25V8.56096L11.8047 11.895C12.0653 12.1721 12.0653 12.6197 11.8047 12.8966Z" fill="#949494"/></svg>
                                            </Col>
                                            <Col>
                                                08 AM - 09 PM
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Store;