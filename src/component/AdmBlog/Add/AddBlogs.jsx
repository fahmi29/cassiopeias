import React, {Component} from 'react';
import { Accordion, Button, Card, Col, Collapse, Form, InputGroup, Nav, Row, Table } from 'react-bootstrap';
import Navigation from "../../Navigation/Navigation";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class AddBlogs extends Component {
    constructor(props){
        super(props);
    }
    changeURL(url){
        this.props.history.push(url);
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
                                            <h4>
                                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.8984 0.751953H4.10156C1.83983 0.751953 0 2.59178 0 4.85352V27.5488C0 30.5644 2.45319 33.0176 5.46875 33.0176H20.918C21.6731 33.0176 22.2852 32.4055 22.2852 31.6504C22.2852 30.8952 21.6731 30.2832 20.918 30.2832H5.46875C3.96111 30.2832 2.73438 29.0565 2.73438 27.5488V9.02344H32.2656V21.6016C32.2656 22.3567 32.8777 22.9688 33.6328 22.9688C34.388 22.9688 35 22.3567 35 21.6016V4.85352C35 2.59178 33.1602 0.751953 30.8984 0.751953ZM25.3613 3.48633C26.1152 3.48633 26.7285 4.09969 26.7285 4.85352C26.7285 5.60734 26.1152 6.2207 25.3613 6.2207C24.6075 6.2207 23.9941 5.60734 23.9941 4.85352C23.9941 4.09969 24.6075 3.48633 25.3613 3.48633ZM32.1973 4.85352C32.1973 5.60734 31.5839 6.2207 30.8301 6.2207C30.0763 6.2207 29.4629 5.60734 29.4629 4.85352C29.4629 4.09969 30.0763 3.48633 30.8301 3.48633C31.5839 3.48633 32.1973 4.09969 32.1973 4.85352ZM2.73438 4.85352C2.73438 4.09969 3.34774 3.48633 4.10156 3.48633H21.495C21.3431 3.91438 21.2598 4.3742 21.2598 4.85352C21.2598 5.35847 21.3519 5.84206 21.5196 6.28906H2.73438V4.85352ZM26.3103 19.8779C26.1512 19.7185 25.9552 19.6007 25.7397 19.5353L20.3583 17.9008C19.8811 17.7558 19.3631 17.8821 19.006 18.2303C18.6493 18.5785 18.5102 19.0934 18.6434 19.574L20.1719 25.0922C20.2349 25.3194 20.3553 25.5264 20.522 25.693L27.9982 33.1834C28.7977 33.9829 29.8482 34.3829 30.8984 34.3829C31.9487 34.3829 32.9989 33.9829 33.7986 33.1834C35.3979 31.5842 35.3979 28.9822 33.7997 27.3841L26.3103 19.8779ZM21.942 21.2395L24.6169 22.052L29.6704 27.1168L27.7365 29.0506L22.7111 24.0158L21.942 21.2395ZM31.8651 31.2498C31.3321 31.7831 30.4648 31.7831 29.9326 31.2509L29.6682 30.986L31.6018 29.0525L31.8653 29.3166C32.3983 29.8495 32.3983 30.7169 31.8651 31.2498Z" fill="black"/></svg>
                                                <b className="ml-2">Add New Blog</b>
                                            </h4>
                                        </Col>
                                        <Col>
                                            <Card className="mb-4 pb-5">
                                                <Card.Body>
                                                    <Row>
                                                        <Col sm={4}>
                                                            <h1>Cover Photo</h1>
                                                        </Col>
                                                        <Col>
                                                            <Form.File />
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>

                                            <Form.Control className="mb-4" placeholder="Title Post" />

                                            <CKEditor
                                                editor={ClassicEditor}
                                                /* config={editorConfiguration} */
                                                data=""
                                                onReady={editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                    console.log("Editor is ready to use!", editor);
                                                }}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData();
                                                    console.log({ event, editor, data });
                                                }}
                                                onBlur={(event, editor) => {
                                                    console.log("Blur.", editor);
                                                }}
                                                onFocus={(event, editor) => {
                                                    console.log("Focus.", editor);
                                                }}
                                            />

                                            <Button variant="primary" className="mt-4" style={{float: 'right'}}>POST</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default AddBlogs;