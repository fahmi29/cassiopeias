    import React, { Component } from 'react';
    import { Card, Row, Col, Form, ButtonGroup, Button, Modal, Tab ,Tabs, Accordion, Image, Table, Container, Nav } from 'react-bootstrap';
    import Navigation from "../Navigation/Navigation";
    import Footer from '../Footer/Footer';

    class Charts extends Component {
        constructor(props){
            super(props)
            this.state = {
                modalcheck: false,
                modalship: false,
                modalpay: false,
                key: 'bukti'
            }
            console.log(props);
        }

        onOpenShip = () => {
            this.setState({ modalship: true });
        }

        onClosemodalship = () => {
            this.setState({ modalship: false });
        }

        onOpenPay = () => {
            this.setState({ modalpay: true, modalcheck: false });
        }

        onClosePay = () => {
            this.setState({ modalpay: false, modalcheck: false });
        }

        onOpenCheck = () => {
            this.setState({ modalcheck: true, modalpay: false });
        }

        onCloseCheck = () => {
            this.setState({ modalcheck: false, modalpay: false });
        }
        
        render(){
            return(
                <>
                    <Navigation history={this.props.history} />
                    <Nav style={{padding:'5%',backgroundColor:'#F5F0E5'}}>
                        <h3>Checkout | 3 Items</h3>
                    </Nav>
                    <Container fluid style={{padding: '5%'}}>
                                <Row>
                                    <Col>
                                        <Card style={{maxHeight: '540px', overflowY: 'auto', border: 'none' }}>
                                            <Card className="mb-3" style={{maxWidth: '540px', border: 'hidden'}} >
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
                                                            <p style={{float: 'right'}}>x</p>
                                                            <h5 className="card-title">Special Signature Cake</h5>
                                                            <Row>
                                                                <Col>
                                                                    <p style={{borderBottom: '1px solid black', width: '30%'}}>Whole Cake</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    20x20
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    Classic(Free 2 Candles)
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="4">
                                                                    RP. 355.000
                                                                </Col>
                                                                <Col>
                                                                    <Form.Control type="number" step={1} defaultValue="1" />
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Form.Control as="textarea" />
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Card>

                                            <Card className="mb-3" style={{maxWidth: '540px', border: 'hidden' }}>
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
                                                            <p style={{float: 'right'}}>x</p>
                                                            <h5 className="card-title">Special Signature Cake</h5>
                                                            <Row>
                                                                <Col>
                                                                    <p style={{borderBottom: '1px solid black', width: '30%'}}>Whole Cake</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    20x20
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    Classic(Free 2 Candles)
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="4">
                                                                    RP. 355.000
                                                                </Col>
                                                                <Col>
                                                                    <Form.Control type="number" step={1} defaultValue="1" />
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Form.Control as="textarea" />
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Card>

                                            <Card className="mb-3" style={{maxWidth: '540px', border: 'hidden' }}>
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
                                                            <p style={{float: 'right'}}>x</p>
                                                            <h5 className="card-title">Special Signature Cake</h5>
                                                            <Row>
                                                                <Col>
                                                                    <p style={{borderBottom: '1px solid black', width: '30%'}}>Whole Cake</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    20x20
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    Classic(Free 2 Candles)
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col md="4">
                                                                    RP. 355.000
                                                                </Col>
                                                                <Col>
                                                                    <Form.Control type="number" step={1} defaultValue="1" />
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Form.Control as="textarea" />
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{marginBottom: '5%', width: '70%', borderRadius: '15px', marginLeft: '15%', border:'none',backgroundColor:'#F5F0E5'}}>
                                            <Card.Body>
                                                <Row>
                                                    <Col md="9">
                                                        <h5 className="card-title" style={{color: '#ac6601'}}>Shipping Information</h5>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="light" onClick={this.onOpenShip}>
                                                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.73084 1.54737L1.57495 6.70325L4.29921 9.4275L9.4551 4.27162L6.73084 1.54737Z" fill="black"/><path d="M10.8362 2.19243L8.82425 0.151906C8.62448 -0.0478656 8.31055 -0.0478656 8.12505 0.137637C8.12505 0.137637 8.12505 0.137637 8.11078 0.151906L7.22607 1.03661L9.95153 3.77634L10.8362 2.89164C11.036 2.69186 11.036 2.37794 10.8362 2.19243Z" fill="black"/><path d="M1.17535 7.30054L0.0480639 10.3256C-0.051822 10.5825 0.0766028 10.8679 0.333452 10.9678C0.447608 11.0106 0.576033 11.0106 0.690188 10.9678L3.71531 9.82622L1.17535 7.30054Z" fill="black"/></svg>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="1">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.364 11.636C14.3837 10.6558 13.217 9.93013 11.9439 9.49085C13.3074 8.55179 14.2031 6.9802 14.2031 5.20312C14.2031 2.33413 11.869 0 9 0C6.131 0 3.79688 2.33413 3.79688 5.20312C3.79688 6.9802 4.69262 8.55179 6.05609 9.49085C4.78308 9.93013 3.61631 10.6558 2.63605 11.636C0.936176 13.3359 0 15.596 0 18H1.40625C1.40625 13.8128 4.81279 10.4062 9 10.4062C13.1872 10.4062 16.5938 13.8128 16.5938 18H18C18 15.596 17.0638 13.3359 15.364 11.636ZM9 9C6.90641 9 5.20312 7.29675 5.20312 5.20312C5.20312 3.1095 6.90641 1.40625 9 1.40625C11.0936 1.40625 12.7969 3.1095 12.7969 5.20312C12.7969 7.29675 11.0936 9 9 9Z" fill="#AC6700"/></svg>
                                                    </Col>
                                                    <Col>
                                                        Dini Rania | 098782027687 
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="1">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0C5.51067 0 2.67188 2.8388 2.67188 6.32812C2.67188 7.50705 2.99844 8.65758 3.61649 9.65574L8.63979 17.7507C8.73601 17.9058 8.90553 18 9.08786 18C9.08926 18 9.09063 18 9.09204 18C9.27594 17.9986 9.44582 17.9014 9.54028 17.7436L14.4355 9.57023C15.0195 8.59317 15.3281 7.47207 15.3281 6.32812C15.3281 2.8388 12.4893 0 9 0ZM13.5304 9.02876L9.07987 16.4597L4.5129 9.10005C3.99846 8.26924 3.71953 7.31074 3.71953 6.32812C3.71953 3.42035 6.09223 1.04766 9 1.04766C11.9078 1.04766 14.277 3.42035 14.277 6.32812C14.277 7.2816 14.0164 8.21559 13.5304 9.02876Z" fill="#AC6700"/><path d="M9 3.16406C7.25534 3.16406 5.83594 4.58346 5.83594 6.32812C5.83594 8.06164 7.23224 9.49219 9 9.49219C10.7896 9.49219 12.1641 8.04259 12.1641 6.32812C12.1641 4.58346 10.7447 3.16406 9 3.16406ZM9 8.44453C7.83081 8.44453 6.88359 7.49415 6.88359 6.32812C6.88359 5.16502 7.83689 4.21172 9 4.21172C10.1631 4.21172 11.1129 5.16502 11.1129 6.32812C11.1129 7.47714 10.1877 8.44453 9 8.44453Z" fill="#AC6700"/></svg>
                                                    </Col>
                                                    <Col>
                                                        Sahid Sudirman Centre, Karet tengsin jaksel 16750
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="1">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M13.5945 10.7017C12.3434 10.7017 11.3256 11.7195 11.3256 12.9706C11.3256 14.2217 12.3434 15.2395 13.5945 15.2395C14.8458 15.2395 15.8634 14.2217 15.8634 12.9706C15.8634 11.7195 14.8456 10.7017 13.5945 10.7017ZM13.5945 14.105C12.9688 14.105 12.46 13.5962 12.46 12.9706C12.46 12.3449 12.9688 11.8361 13.5945 11.8361C14.2201 11.8361 14.7289 12.3449 14.7289 12.9706C14.7289 13.5963 14.2201 14.105 13.5945 14.105Z" fill="#AC6700"/><path d="M5.84252 10.7017C4.59142 10.7017 3.57361 11.7195 3.57361 12.9706C3.57361 14.2217 4.59142 15.2395 5.84252 15.2395C7.09363 15.2395 8.11144 14.2217 8.11144 12.9706C8.11144 11.7195 7.09363 10.7017 5.84252 10.7017ZM5.84252 14.105C5.21688 14.105 4.70807 13.5962 4.70807 12.9706C4.70807 12.3449 5.21688 11.8361 5.84252 11.8361C6.46799 11.8361 6.97698 12.3449 6.97698 12.9706C6.97698 13.5963 6.46816 14.105 5.84252 14.105Z" fill="#AC6700"/><path d="M15.1225 4.20732C15.0261 4.01579 14.83 3.89496 14.6156 3.89496H11.6282V5.02942H14.2658L15.8103 8.10151L16.8242 7.59174L15.1225 4.20732Z" fill="#AC6700"/><path d="M11.8929 12.4223H7.60083V13.5568H11.8929V12.4223Z" fill="#AC6700"/><path d="M4.14075 12.4223H2.17439C1.86108 12.4223 1.60718 12.6762 1.60718 12.9895C1.60718 13.3028 1.86111 13.5567 2.17439 13.5567H4.14078C4.4541 13.5567 4.70799 13.3028 4.70799 12.9895C4.70799 12.6762 4.45406 12.4223 4.14075 12.4223Z" fill="#AC6700"/><path d="M17.8809 8.95461L16.7652 7.51763C16.658 7.37922 16.4925 7.29829 16.3173 7.29829H12.1954V3.32771C12.1954 3.0144 11.9415 2.7605 11.6282 2.7605H2.17439C1.86108 2.7605 1.60718 3.01443 1.60718 3.32771C1.60718 3.64099 1.86111 3.89492 2.17439 3.89492H11.0609V7.8655C11.0609 8.17881 11.3149 8.43271 11.6281 8.43271H16.0395L16.8655 9.49682V12.4222H15.2962C14.9829 12.4222 14.729 12.6761 14.729 12.9894C14.729 13.3027 14.9829 13.5566 15.2962 13.5566H17.4328C17.7461 13.5566 18 13.3027 18 12.9894V9.30251C18 9.17658 17.958 9.05406 17.8809 8.95461Z" fill="#AC6700"/><path d="M4.10286 9.54834H1.4936C1.18029 9.54834 0.926392 9.80227 0.926392 10.1156C0.926392 10.4289 1.18033 10.6828 1.4936 10.6828H4.10283C4.41614 10.6828 4.67004 10.4288 4.67004 10.1156C4.67008 9.80227 4.41614 9.54834 4.10286 9.54834Z" fill="#AC6700"/><path d="M5.40756 7.3172H0.567211C0.253934 7.3172 0 7.57113 0 7.88445C0 8.19776 0.253934 8.45166 0.567211 8.45166H5.40756C5.72087 8.45166 5.97477 8.19772 5.97477 7.88445C5.97477 7.57117 5.72087 7.3172 5.40756 7.3172Z" fill="#AC6700"/><path d="M6.33395 5.08612H1.4936C1.18029 5.08612 0.926392 5.34005 0.926392 5.65333C0.926392 5.96664 1.18033 6.22054 1.4936 6.22054H6.33395C6.64726 6.22054 6.90116 5.96661 6.90116 5.65333C6.9012 5.34005 6.64726 5.08612 6.33395 5.08612Z" fill="#AC6700"/></g><defs><clipPath id="clip0"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                                                    </Col>
                                                    <Col>
                                                        Pick up Outlet | 12-08-2021
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{width: '70%', borderRadius: '15px', marginLeft: '15%',border:'none',backgroundColor:'#F5F0E5' }}>
                                            <Card.Body>
                                                <Row>
                                                    <Col md="9">
                                                        <h5 className="card-title" style={{color: '#ac6601'}}>Payment Information</h5>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="light">
                                                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.73084 1.54737L1.57495 6.70325L4.29921 9.4275L9.4551 4.27162L6.73084 1.54737Z" fill="black"/><path d="M10.8362 2.19243L8.82425 0.151906C8.62448 -0.0478656 8.31055 -0.0478656 8.12505 0.137637C8.12505 0.137637 8.12505 0.137637 8.11078 0.151906L7.22607 1.03661L9.95153 3.77634L10.8362 2.89164C11.036 2.69186 11.036 2.37794 10.8362 2.19243Z" fill="black"/><path d="M1.17535 7.30054L0.0480639 10.3256C-0.051822 10.5825 0.0766028 10.8679 0.333452 10.9678C0.447608 11.0106 0.576033 11.0106 0.690188 10.9678L3.71531 9.82622L1.17535 7.30054Z" fill="black"/></svg>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="1">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M17.9167 3.33331H2.08332C0.935 3.33331 0 4.26831 0 5.41667V14.5834C0 15.7317 0.935 16.6667 2.08332 16.6667H17.9166C19.065 16.6667 20 15.7317 20 14.5834V5.41667C20 4.26831 19.065 3.33331 17.9167 3.33331ZM19.1667 14.5833C19.1667 15.2725 18.6059 15.8333 17.9167 15.8333H2.08332C1.39414 15.8333 0.83332 15.2725 0.83332 14.5833V5.41667C0.83332 4.72749 1.39414 4.16667 2.08332 4.16667H17.9166C18.6058 4.16667 19.1666 4.72749 19.1666 5.41667V14.5833H19.1667Z" fill="#AC6700"/><path d="M19.5833 5.83331H0.41668C0.18668 5.83331 0 6.01999 0 6.24999V8.74999C0 8.97999 0.18668 9.16667 0.41668 9.16667H19.5834C19.8134 9.16667 20 8.97999 20 8.74999V6.24999C20 6.01999 19.8133 5.83331 19.5833 5.83331ZM19.1667 8.33331H0.83332V6.66663H19.1666V8.33331H19.1667Z" fill="#AC6700"/><path d="M7.91668 11.6667H2.91668C2.68668 11.6667 2.5 11.8534 2.5 12.0834C2.5 12.3134 2.68668 12.5 2.91668 12.5H7.91668C8.14668 12.5 8.33336 12.3133 8.33336 12.0833C8.33336 11.8533 8.14668 11.6667 7.91668 11.6667Z" fill="#AC6700"/><path d="M7.91668 13.3333H2.91668C2.68668 13.3333 2.5 13.52 2.5 13.75C2.5 13.98 2.68668 14.1667 2.91668 14.1667H7.91668C8.14668 14.1667 8.33336 13.98 8.33336 13.75C8.33332 13.52 8.14668 13.3333 7.91668 13.3333Z" fill="#AC6700"/><path d="M16.2501 10.8333H15.4167C14.7276 10.8333 14.1667 11.3941 14.1667 12.0833V12.9166C14.1667 13.6058 14.7276 14.1666 15.4167 14.1666H16.2501C16.9392 14.1666 17.5001 13.6058 17.5001 12.9166V12.0833C17.5001 11.3942 16.9392 10.8333 16.2501 10.8333ZM16.6667 12.9167C16.6667 13.1467 16.4801 13.3334 16.2501 13.3334H15.4167C15.1867 13.3334 15.0001 13.1467 15.0001 12.9167V12.0834C15.0001 11.8534 15.1867 11.6667 15.4167 11.6667H16.2501C16.4801 11.6667 16.6667 11.8534 16.6667 12.0834V12.9167Z" fill="#AC6700"/></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                                                    </Col>
                                                    <Col>
                                                        Transfer Bank (BCA)
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    
                                        <Card style={{border: 'hidden',paddingLeft: '40%'}}>
                                            <Card.Body>
                                                <Row>
                                                    <Col>Total</Col>
                                                    <Col>RP. 700.000</Col>
                                                </Row>
                                                <Row>
                                                    <Col>Shipping Cost</Col>
                                                    <Col>RP. 40.000</Col>
                                                </Row>
                                                <Row style={{color: '#ac6601'}}>
                                                    <Col>Grand Total</Col>
                                                    <Col>RP. 740.000</Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        <Button className="btn" style={{width: '70%', marginLeft: '16%', backgroundColor: '#ad6600'}} onClick={this.onOpenCheck}>Checkout</Button>
                                    </Col>
                                </Row>

                            
                    </Container>

                    <Modal show={this.state.modalship} onHide={this.onClosemodalship} size="md">
                        <Modal.Header closeButton style={{border: 'none'}}>
                            <Modal.Title style={{color: '#AD6600', marginLeft: '20%'}}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M22.6575 17.8361C20.5723 17.8361 18.876 19.5325 18.876 21.6176C18.876 23.7028 20.5723 25.3992 22.6575 25.3992C24.743 25.3992 26.439 23.7028 26.439 21.6176C26.439 19.5325 24.7427 17.8361 22.6575 17.8361ZM22.6575 23.5084C21.6148 23.5084 20.7667 22.6604 20.7667 21.6176C20.7667 20.5749 21.6148 19.7269 22.6575 19.7269C23.7002 19.7269 24.5483 20.5749 24.5483 21.6176C24.5483 22.6604 23.7002 23.5084 22.6575 23.5084Z" fill="#AC6700"/><path d="M9.73758 17.8361C7.6524 17.8361 5.95605 19.5325 5.95605 21.6176C5.95605 23.7028 7.6524 25.3992 9.73758 25.3992C11.8228 25.3992 13.5191 23.7028 13.5191 21.6176C13.5191 19.5325 11.8228 17.8361 9.73758 17.8361ZM9.73758 23.5084C8.69484 23.5084 7.84682 22.6604 7.84682 21.6176C7.84682 20.5749 8.69484 19.7269 9.73758 19.7269C10.78 19.7269 11.6283 20.5749 11.6283 21.6176C11.6283 22.6604 10.7803 23.5084 9.73758 23.5084Z" fill="#AC6700"/><path d="M25.204 7.01218C25.0433 6.69296 24.7165 6.49158 24.3591 6.49158H19.3801V8.38234H23.7761L26.3504 13.5025L28.0401 12.6529L25.204 7.01218Z" fill="#AC6700"/><path d="M19.8216 20.7039H12.6682V22.5946H19.8216V20.7039Z" fill="#AC6700"/><path d="M6.90133 20.7039H3.62406C3.10188 20.7039 2.67871 21.1271 2.67871 21.6492C2.67871 22.1714 3.10193 22.5946 3.62406 22.5946H6.90139C7.42357 22.5946 7.84674 22.1713 7.84674 21.6492C7.84674 21.127 7.42352 20.7039 6.90133 20.7039Z" fill="#AC6700"/><path d="M29.8016 14.9243L27.942 12.5294C27.7634 12.2987 27.4876 12.1638 27.1955 12.1638H20.3257V5.54618C20.3257 5.02399 19.9025 4.60083 19.3804 4.60083H3.62406C3.10187 4.60083 2.67871 5.02405 2.67871 5.54618C2.67871 6.06831 3.10193 6.49153 3.62406 6.49153H18.435V13.1092C18.435 13.6314 18.8582 14.0545 19.3803 14.0545H26.7326L28.1093 15.828V20.7037H25.4938C24.9716 20.7037 24.5484 21.1269 24.5484 21.649C24.5484 22.1712 24.9716 22.5944 25.4938 22.5944H29.0547C29.5769 22.5944 30 22.1712 30.0001 21.649V15.5042C30.0001 15.2943 29.9301 15.0901 29.8016 14.9243Z" fill="#AC6700"/><path d="M6.83807 15.9139H2.4893C1.96711 15.9139 1.54395 16.3371 1.54395 16.8592C1.54395 17.3814 1.96717 17.8046 2.4893 17.8046H6.83801C7.3602 17.8046 7.78336 17.3814 7.78336 16.8592C7.78342 16.3371 7.3602 15.9139 6.83807 15.9139Z" fill="#AC6700"/><path d="M9.0126 12.1953H0.945352C0.423223 12.1953 0 12.6185 0 13.1407C0 13.6629 0.423223 14.0861 0.945352 14.0861H9.0126C9.53479 14.0861 9.95795 13.6629 9.95795 13.1407C9.95795 12.6186 9.53479 12.1953 9.0126 12.1953Z" fill="#AC6700"/><path d="M10.5565 8.47693H2.4893C1.96711 8.47693 1.54395 8.90015 1.54395 9.42228C1.54395 9.94447 1.96717 10.3676 2.4893 10.3676H10.5565C11.0787 10.3676 11.5019 9.94441 11.5019 9.42228C11.502 8.90015 11.0787 8.47693 10.5565 8.47693Z" fill="#AC6700"/></g><defs><clipPath id="clip0"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>
                                &nbsp; Shipping Information
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Control placeholder="Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control as="select">
                                        <option>Address</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Form>
                                <Button size="md" block style={{backgroundColor: '#AD6701', marginTop: '5%'}}>Save</Button>
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.modalcheck} onHide={this.onCloseCheck} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title style={{color: '#AD6600', marginLeft: '20%'}}>
                                <span style={{fontWeight: 'bold'}}>SUMMARY ORDER</span>
                                <p>ORDER ID : HV738222</p>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table responsive>
                                <thead style={{backgroundColor: '#f1f1f1'}}>
                                    <th>No</th>
                                    <th>Product</th>
                                    <th>Size</th>
                                    <th>QTY</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Regal Chocolato</td>
                                        <td>D20</td>
                                        <td>1</td>
                                        <td>Rp. 325.000</td>
                                        <td>Rp. 325.000</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Burn Cheesecake </td>
                                        <td>D20</td>
                                        <td>2</td>
                                        <td>Rp. 325.000</td>
                                        <td>Rp. 650.000</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Row>
                                <Col md={{ offset: 7 }}>
                                    <b>Total</b>
                                </Col>
                                <Col>
                                    Rp. 700.000
                                </Col>
                                <Col md={{ offset: 7 }}>
                                    <b>Shipping Cost</b>
                                </Col>
                                <Col>
                                    Rp. 40.000
                                </Col>
                                <Col md={{ offset: 7 }}>
                                    <b style={{color: '#ad6600'}}>Grand Total</b>
                                </Col>
                                <Col>
                                    <span style={{color: '#ad6600'}}>Rp. 740.000</span> 
                                </Col>
                            </Row>
                            <Button variant="light" style={{backgroundColor: '#ad6600', color: '#ffffff'}} className="mt-5" block onClick={() => {this.onOpenPay()}}>Payment &nbsp; <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M8.77879 3.96668L5.0351 0.222978C4.73983 -0.0722915 4.26095 -0.0722915 3.96568 0.222978C3.67041 0.518248 3.67041 0.997129 3.96568 1.2924L7.17431 4.50101L3.96568 7.70961C3.67041 8.00488 3.67041 8.48376 3.96568 8.77903C4.26095 9.0743 4.73983 9.0743 5.0351 8.77903L8.77879 5.03535C9.07406 4.74081 9.07406 4.26195 8.77879 3.96668ZM4.27744 3.73998L1.30527 0.607436C1.00662 0.293064 0.522885 0.293064 0.224233 0.607436C-0.0744188 0.921808 -0.0744188 1.43179 0.224233 1.74655L2.65608 4.30953L0.224233 6.87252C-0.0744188 7.18691 -0.0744188 7.69725 0.224233 8.01163C0.522885 8.32602 1.00662 8.32602 1.30527 8.01163L4.27744 4.87909C4.57609 4.56472 4.57609 4.05473 4.27744 3.73998Z" fill="#F3F2F2"/></g><defs><clipPath id="clip0"><rect width="9" height="9" fill="white"/></clipPath></defs></svg></Button>
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.modalpay} onHide={this.onClosePay} size="md">
                        <Modal.Header closeButton style={{border: 'none'}}>
                            <Modal.Title style={{color: '#AD6600', marginLeft: '20%'}}>
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M32.4135 4.54859C31.986 4.04315 31.3872 3.73442 30.7274 3.67932L7.48846 1.7389C6.82859 1.68379 6.18702 1.88895 5.68152 2.31646C5.17808 2.7423 4.8698 3.33804 4.81295 3.99462L4.34541 8.38102H2.47854C1.11188 8.38102 0 9.4929 0 10.8596V25.4067C0 26.7734 1.11188 27.8852 2.47854 27.8852H25.7984C27.1651 27.8852 28.277 26.7734 28.277 25.4067V23.0469L29.1045 23.116C29.1743 23.1218 29.2437 23.1247 29.3126 23.1247C30.5867 23.1247 31.6728 22.1444 31.7807 20.8523L32.9912 6.35559C33.0463 5.69579 32.8411 5.0541 32.4135 4.54859ZM2.47854 9.67008H25.7984C26.4543 9.67008 26.988 10.2037 26.988 10.8596V12.1851H1.28906V10.8596C1.28906 10.2037 1.82266 9.67008 2.47854 9.67008ZM1.28906 13.4742H26.988V16.1482H1.28906V13.4742ZM25.7984 26.5962H2.47854C1.82266 26.5962 1.28906 26.0626 1.28906 25.4067V17.4373H26.988V25.4067C26.988 26.0626 26.4543 26.5962 25.7984 26.5962ZM31.7066 6.24828L30.4961 20.745C30.4415 21.3986 29.8653 21.8862 29.2118 21.8314L28.277 21.7533V10.8596C28.277 9.4929 27.1651 8.38102 25.7984 8.38102H5.64182L6.0955 4.12456C6.09602 4.11966 6.09647 4.11483 6.09686 4.10986C6.15145 3.45625 6.7274 2.96872 7.38121 3.02351L30.6202 4.96393C30.9369 4.99035 31.2243 5.13853 31.4294 5.38113C31.6346 5.62373 31.733 5.93162 31.7066 6.24828Z" fill="#AC6700"/><path d="M24.2905 19.3536H18.0874C17.7314 19.3536 17.4429 19.6421 17.4429 19.9981V24.0451C17.4429 24.401 17.7314 24.6896 18.0874 24.6896H24.2905C24.6465 24.6896 24.935 24.401 24.935 24.0451V19.9981C24.935 19.6421 24.6465 19.3536 24.2905 19.3536ZM23.646 23.4005H18.7319V20.6426H23.646V23.4005Z" fill="#AC6700"/></g><defs><clipPath id="clip0"><rect width="33" height="33" fill="white"/></clipPath></defs></svg>
                                &nbsp; Payment
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card className="mb-4">
                                <Card.Header closeButton style={{background: 'none'}}>
                                    <Modal.Title style={{color: '#AD6600'}}>
                                        <Image src="https://twinjayatekstil.com/wp-content/uploads/2018/07/logo-bank-bri.jpg" style={{width: '78px'}} />
                                    </Modal.Title>
                                </Card.Header>
                                <Card.Body>
                                    {/* No Rekening */}
                                    <span style={{fontWeight: 'bold'}}>No Rekening</span>
                                    <span style={{float: 'right', color: '#AD6600'}}>Copy</span>
                                    <p style={{marginBottom: 0}}>530 989 830</p>
                                    <p style={{marginBottom: 0}}>PT. Harvest Indonesia</p><br />

                                    {/* Total */}
                                    <span style={{fontWeight: 'bold'}}>Total</span>
                                    <p style={{marginBottom: 0}}>IDR 960.000</p><br />

                                    {/* Batas */}
                                    <span style={{fontWeight: 'bold'}}>Batas Akhir Pembayaran</span>
                                    <span style={{float: 'right', color: '#AD6600'}}>Detail v</span>
                                    <p style={{marginBottom: 0}}>Rabu, 29 Juli 2020 14:20</p>
                                </Card.Body>
                            </Card>

                            <Tabs
                                id="controlled-tab-example"
                                activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}
                            >
                                <Tab eventKey="bukti" title="Bukti Pembayaran">
                                    <Card title="Bukti Pembayaran" >
                                        <Form name="basic">
                                            <Form.Group name="noreq" >
                                                <Form.Control placeholder="No. Rekening" style={{ width: '80%', marginLeft: '9.5%' }} />
                                            </Form.Group>
                                            <Form.Group name="nama" >
                                                <Form.Control placeholder="Atas Nama" style={{ width: '80%', marginLeft: '9.5%' }} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control type="file" style={{ width: '80%', marginLeft: '9.5%' }} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Button style={{ backgroundColor: '#ad6600', border: '0', width: '80%', marginLeft: '9.5%' }} block type="primary" htmlType="submit">Kirim</Button>
                                                {/* <Button style={{ border: '1px solid #392C7E', marginTop: '2%' }} block htmlType="submit">Batalkan</Button> */}
                                                <Button variant="outline-light" style={{border: '1px solid #ad6600', marginTop: '2%', color: '#ad6600', width: '80%', marginLeft: '9.5%'}} block onClick={this.onClosePay}>Batalkan</Button>
                                            </Form.Group>
                                        </Form>
                                    </Card>
                                </Tab>
                                <Tab eventKey="tata" title="Tata Cara Pembayaran">
                                    <Accordion defaultActiveKey="2">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" onClick={()=>{console.log('clicked');}}>

                                                ATM Transfer
                                                <span style={{textAlign: 'right'}}>+</span>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body></Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                                Mobile Banking
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body></Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                                                Internet Banking BCA
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <ol>
                                                        <li>Buka browser internet banking Kamu dan ketik alamat tujuan www.klikbca.com</li>
                                                        <li>Masukkan User ID dan PIN internet banking Kamu</li>
                                                        <li>Lakukan transfer antar bank dengan tujuan ke Bank BCA</li>
                                                        <li>Masukkan Nomor Rekening BCA 2611-8908-98 Atas Nama PT Galilagi Indonesia</li>
                                                    </ol>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Tab>
                            </Tabs>
                        </Modal.Body>
                    </Modal>
                    <Footer  history={this.props.history} />
                </>
            );
        }
    }

    export default Charts;