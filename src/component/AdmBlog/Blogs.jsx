import React, {Component} from 'react';
import { Accordion, Button, Col, Collapse, Form, InputGroup, Nav, Row, Table } from 'react-bootstrap';
import Navigation from "../Navigation/Navigation";

class AdmBlog extends Component {
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
                                    <h4>Blog(50)</h4>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <Col md={4}>
                                            <InputGroup>
                                                <Form.Control onChange={ (event) => { this.setState({ certificate_id: event.target.value }) } } onClick={ () => { this.setState({ button: true }) } } style={{ border: '0', borderRadius: '30px' }} placeholder="Input your order code" />
                                            </InputGroup>
                                        </Col>
                                        <Col md={2}>
                                            <Button variant="primary">
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M13.5631 7.82508L5.49214 7.78983C5.21635 8.85399 4.13009 9.49308 3.0659 9.21728C2.36017 9.03438 1.8109 8.48028 1.63416 7.77298L0.563197 7.7683C0.287047 7.7671 0.0641699 7.54226 0.065376 7.26611C0.0665821 6.98996 0.291415 6.76712 0.567564 6.76832L1.63856 6.773C1.91435 5.70884 3.00061 5.06975 4.0648 5.34555C4.77053 5.52845 5.3198 6.08255 5.49654 6.78985L13.5674 6.8251C13.8436 6.82631 14.0664 7.05114 14.0652 7.32729C14.064 7.60344 13.8392 7.82629 13.5631 7.82508ZM3.56972 6.28142C3.01745 6.27901 2.56778 6.72476 2.56537 7.27703C2.56296 7.8293 3.00871 8.27897 3.56098 8.28138C4.11325 8.28379 4.56292 7.83804 4.56533 7.28577C4.56774 6.7335 4.12199 6.28383 3.56972 6.28142Z" fill="white"/><path d="M13.5416 12.8256L11.9706 12.8187C11.6948 13.8829 10.6085 14.522 9.54436 14.2462C8.83863 14.0633 8.28936 13.5092 8.11262 12.8019L0.541712 12.7688C0.265563 12.7676 0.0426855 12.5428 0.0438916 12.2666C0.0450977 11.9905 0.269931 11.7676 0.54608 11.7688L8.11699 11.8018C8.39278 10.7377 9.47904 10.0986 10.5432 10.3744C11.249 10.5573 11.7982 11.1114 11.975 11.8187L13.5459 11.8256C13.8221 11.8268 14.045 12.0516 14.0438 12.3277C14.0426 12.6039 13.8177 12.8268 13.5416 12.8256ZM10.0482 11.3103C9.49591 11.3079 9.04624 11.7536 9.04383 12.3059C9.04142 12.8582 9.48717 13.3078 10.0394 13.3103C10.5917 13.3127 11.0414 12.8669 11.0438 12.3146C11.0462 11.7624 10.6004 11.3127 10.0482 11.3103Z" fill="white"/><path d="M13.5855 2.82508L11.0145 2.81385C10.7387 3.87801 9.65249 4.5171 8.5883 4.24131C7.88257 4.0584 7.33329 3.5043 7.15656 2.797L0.585658 2.7683C0.309508 2.7671 0.0866308 2.54226 0.0878368 2.26614C0.0890428 1.99002 0.313876 1.76712 0.590025 1.76832L7.16095 1.79702C7.43675 0.732864 8.52301 0.0937735 9.58719 0.369567C10.2929 0.552475 10.8422 1.10657 11.0189 1.81387L13.5899 1.8251C13.866 1.82631 14.0889 2.05114 14.0877 2.32729C14.0865 2.60344 13.8617 2.82629 13.5855 2.82508ZM9.09211 1.30544C8.53984 1.30303 8.09018 1.74878 8.08776 2.30105C8.08535 2.85332 8.53111 3.30299 9.08338 3.3054C9.63565 3.30782 10.0853 2.86206 10.0877 2.30979C10.0901 1.75752 9.64441 1.30785 9.09211 1.30544Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="14" height="14" fill="white" transform="matrix(0.99999 0.00436764 0.00436764 -0.99999 0.0351562 14.2661)"/></clipPath></defs></svg>
                                                Fillter
                                            </Button>
                                        </Col>
                                        <Col md={2}>
                                            <Button variant="primary">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M12.0208 8.0352C11.9406 7.85584 11.7631 7.74107 11.5671 7.74021L9.56709 7.73148L9.59548 1.23154C9.59669 0.95554 9.37367 0.730563 9.09767 0.729358L7.09769 0.720623C6.82169 0.719417 6.59672 0.942437 6.59551 1.21843L6.56712 7.71837L4.56714 7.70964C4.37114 7.70878 4.19264 7.823 4.11086 8.00065C4.02808 8.17929 4.05917 8.38842 4.18752 8.53699L7.67002 12.5522C7.76454 12.6616 7.90127 12.7242 8.04527 12.7249C8.18927 12.7255 8.32654 12.6631 8.42201 12.5555L11.9394 8.57084C12.0701 8.42441 12.101 8.21455 12.0208 8.0352Z" fill="white"/><path d="M13.5497 11.7487L13.5366 14.7486L2.53668 14.7006L2.54979 11.7006L0.549805 11.6919L0.532334 15.6919C0.529919 16.2449 0.975962 16.6938 1.52796 16.6962L14.5278 16.753C15.0808 16.7554 15.5298 16.3104 15.5322 15.7574L15.5497 11.7574L13.5497 11.7487Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white" transform="translate(0.0976562 0.689941) rotate(0.250248)"/></clipPath></defs></svg>
                                                Export
                                            </Button>
                                        </Col>
                                        <Col md={4}>
                                            <Button variant="primary" style={{float: 'right'}} onClick={() => {this.changeURL('/addblog')}}><b style={{fontSize: '24px'}}>+</b> Add new blog</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default AdmBlog;