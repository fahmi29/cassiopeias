import React, { Component, Fragment } from 'react';
import Logo from "../components/image/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Carousel, Form, FormControl, Button, Row, Col, Card, Image, Container, Modal } from 'react-bootstrap';
import Navigation from './Navigation/Navigation';
import Kue from '../components/image/landing.jpg';

class Landing extends Component {
    render(){
        return(
            <>
                <Router>
                    {/* <Container fluid>
                        <Fragment>
                            <Navbar expand="lg">
                                <Navbar.Brand href="#home"><img style={{cursor: 'pointer', width: '60%'}} src={Logo} /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <Form inline> */}
                                            {/* <div>
                                                <input type="search" className="srch" placeholder="Search for anything" />
                                                <span className="icon">
                                                <i className="fa fa-search"></i>
                                                </span>
                                            </div> */}
                                            {/* <Form.Group>
                                                <Form.Control type="text" placeholder="Search" sty />
                                            </Form.Group>
                                            <a id="login" className="btn" href="#"
                                            // onClick={this.onOpenLoginModal} 
                                            >
                                                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.68638 3.14285L3.35476 1.78357C3.09658 0.735115 2.17153 -6.19031e-05 1.11054 3.90946e-09H0V1.57142H1.11054C1.47355 1.56065 1.79474 1.80935 1.88175 2.16856L4.62725 13.5457L4.9126 14.7164C5.17282 15.7734 6.11035 16.5109 7.17995 16.4999H17.7378V14.9285H7.17995C6.81694 14.9393 6.49574 14.6906 6.40874 14.3314L6.3162 13.9385L17.7378 11.1964C18.5822 10.9964 19.246 10.3322 19.4576 9.47568L21 3.14285H3.68638ZM17.9923 9.09854C17.9209 9.38547 17.6973 9.60718 17.4139 9.67211L5.96144 12.4142L4.07198 4.71427H19.0643L17.9923 9.09854ZM3.85604 19.6428C3.85604 18.341 4.89189 17.2857 6.16967 17.2857C7.44745 17.2857 8.48329 18.341 8.48329 19.6428C8.48329 20.9446 7.44745 21.9999 6.16967 21.9999C4.89189 21.9999 3.85604 20.9446 3.85604 19.6428ZM5.39846 19.6428C5.39846 20.0767 5.74374 20.4285 6.16967 20.4285C6.59559 20.4285 6.94087 20.0767 6.94087 19.6428C6.94087 19.2089 6.59559 18.8571 6.16967 18.8571C5.74374 18.8571 5.39846 19.2089 5.39846 19.6428ZM13.2867 18.7408C13.6448 17.86 14.4884 17.2857 15.4242 17.2857C16.7019 17.2857 17.7378 18.341 17.7378 19.6428C17.7378 20.5962 17.1741 21.4557 16.3096 21.8205C15.445 22.1853 14.4499 21.9837 13.7882 21.3095C13.1265 20.6354 12.9285 19.6216 13.2867 18.7408ZM14.653 19.6428C14.653 20.0767 14.9982 20.4285 15.4242 20.4285C15.8501 20.4285 16.1954 20.0767 16.1954 19.6428C16.1954 19.2089 15.8501 18.8571 15.4242 18.8571C14.9982 18.8571 14.653 19.2089 14.653 19.6428Z" fill="black"/>
                                                </svg>
                                            </a>
                                            <a id="login" className="btn" href="#"
                                            // onClick={this.onOpenLoginModal} 
                                            >
                                                Login
                                            </a> */}
                                            {/* {this.state.modalLoginIsOpen ? (
                                                <Login state={this.state} modalLoginIsOpen={this.state.modalLoginIsOpen} modalSignIsOpen={this.onOpenSignModal} redirect={(e) => { this.props.history.push(e); }} onClose={() => { this.setState({ modalLoginIsOpen: false }); }} />
                                            ) : null} */}
                                            {/* <a id="signup" className="btn" href="#"
                                            onClick={this.onOpenSignModal} >
                                                Sign Up
                                            </a>
                                        </Form>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Fragment>
                    </Container> */}
                    <Navigation />
                    <Nav className="justify-content-center">
                        <p>test</p>
                    </Nav>
                    <Image src={Kue} style={{width: "50%", height: "50%"}} />
                    {/* <Card style={{backgroundImage: `url(${Kue})`, left: "0%", right: "0%", top: "0%", bottom: "0%",position: "absolute",backgroundRepeat: 'no-repeat'}}> */}
                        {/* <Card.Img variant="top" src={Kue} /> */}
                        {/* <img src={Kue} style={{width: "25%", height: "25%"}} /> */}
                        {/* <Button>Test</Button> */}
                        {/* <p>Test</p>
                    </Card> */}
                    {/* <Image src={Kue} style={{width: "50%", height: "15%"}} /> */}
                </Router>
            </>
        )
    }
}

export default Landing;