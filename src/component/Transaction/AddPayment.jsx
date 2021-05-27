import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Card,
    Navbar,
    Button,
    Modal,
    Accordion,
    ProgressBar,
    Nav
  } from "react-bootstrap";
import Navigation from '../Navigation/Navigation';
import {Collapse} from 'antd';
const {Panel} = Collapse;

class AddPayment extends Component {
    constructor(props){
        super(props);
    }
    changeURL(url){
        this.props.history.push(url)
    }
    render() {
        return (
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
                    <Container
                    fluid
                    style={{
                        width: "100%",
                        minHeight: "2000px",
                        paddingTop: "50px",
                        backgroundColor: "#F5F0E5",
                    }}
                    >
                    <Row className="justify-content-center">
                        <Col>
                            <div style={{padding:'3%'}}>
                                <Row>
                                    <Col md={12}>
                                        <h4>Add Payment Methode</h4>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <br /><br />
            
                    <Row className="justify-content-center">
                        <Col xs={10} md={10}>
                        <h4 className="title-course">1. Bank</h4>
                        </Col>
                    </Row>
            
                    <Row>
                        <Col>
                        <Card style={{ width: "83%", margin: 'auto', backgroundColor: "#F5F0E5", border: 'hidden' }}>
                            <Card.Body style={{ padding: '2rem' }}>
                            <Row>
                                <Col xs={12} lg={5}>
                                <Form>
            
                                    <Form.Group>
                                    <Form.Label className="form-label">Bank Name *</Form.Label>
                                    <Form.Control type="text" onChange={(event) => {
                                        this.setState({
                                        bank_name: event.target.value,
                                        });
                                    }}
                                    />
                                    </Form.Group>
            
                                    <Form.Group>
                                    <input type="file" name="file" id="file" className="inputfile" onChange={this.onFileChange} />
                                    <label style={{ width: '100%' }} for="file"><i className="fa fa-upload"></i> Add Logo Bank</label>
                                    {/* <div>url: {this.state.url}</div> */}
                                    </Form.Group>
            
                                </Form>
            
                                </Col>
                                <Col lg={2} />
                                <Col xs={12} lg={5}>
                                <Form>
                                    <Form.Group>
                                    <Form.Label>Account Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(event) => {
                                        this.setState({ account_name: event.target.value });
                                        }}
                                    />
                                    </Form.Group>
                                    <Form.Group>
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(event) => {
                                        this.setState({ account_number: event.target.value });
                                        }}
                                    />
                                    </Form.Group>
                                    <Form.Group>
                                    <Form.Label>Kode Bank</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(event) => {
                                        this.setState({ kode: event.target.value });
                                        }}
                                    />
                                    </Form.Group>
                                </Form>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <br /><br />
            
                    <Row className="justify-content-center">
                        <Col xs={10} md={10}>
                        <h4 className="title-course">2. Payment Information</h4>
                        </Col>
                    </Row>
            
                    <Row>
                        <Col>
                        <Card style={{ width: "83%", margin: 'auto', backgroundColor: "#F5F0E5", border: 'hidden' }}>
                            <Card.Body style={{ padding: '2rem' }}>
                            <Row>
                                <Col xs={6} lg={5}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="form-label">Information Name</Form.Label>
                                        <Form.Control type="text" name="information_name"/>
                                    </Form.Group>
            
                                    <Form.Group>
                                        <Form.Label>Description *</Form.Label>
                                        <Form.Control as="textarea" rows="3" name="description" />
                                    </Form.Group>
            
                                    <Button style={{ float: 'right' }} className="button-purple" onClick={() => {this.information();}}>Add</Button>
                                </Form>
            
                                </Col>
                                <Col lg={2} />
                                <Col xs={6} lg={5}>
            
                                    {/* <Accordion defaultActiveKey="0">
                                        <Collapse accordion style={{ margin: 'auto' }} expandIconPosition={"Right"} defaultActiveKey={['1']}>
                                            <Panel header="Mobile Banking" style={{ backgroundColor: "#EFEFEF" }} key="1">
                                                <Card>
                                                    <Card.Body>
                                                        <p>
                                                            1. Pilih meu m-BCA di ponsel Kamu dan tekan OK/YES 
                                                        </p>
                                                        <p>
                                                            2. Pilih menu m-Transfer dan tekan OK/YES 
                                                        </p>
                                                        <p>
                                                            3. Pilih Antar Rek dan tekan OK/YES 
                                                        </p>
                                                        <p>
                                                            4. Pilih Mata Uang (Rp/USD/SGD) dan tekan OK/YES 
                                                        </p>
                                                        <p>
                                                            5. Masukkan total nominal pembayaran Kamu
                                                        </p>
                                                    </Card.Body>
                                                </Card>
                                            </Panel>
                                            <Panel header="Internet Banking BCA" style={{ backgroundColor: "#EFEFEF" }} key="2">
                                                <Card>
                                                    <Card.Body>test</Card.Body>
                                                </Card>
                                            </Panel>
                                            <Panel header="ATM Transfer" style={{ backgroundColor: "#EFEFEF" }} key="3">
                                                <Card>
                                                    <Card.Body>test</Card.Body>
                                                </Card>
                                            </Panel>
                                        </Collapse>
                                    </Accordion> */}
                                    <Accordion defaultActiveKey="0">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                Mobile Banking
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p>
                                                    1. Pilih meu m-BCA di ponsel Kamu dan tekan OK/YES 
                                                </p>
                                                <p>
                                                    2. Pilih menu m-Transfer dan tekan OK/YES 
                                                </p>
                                                <p>
                                                    3. Pilih Antar Rek dan tekan OK/YES 
                                                </p>
                                                <p>
                                                    4. Pilih Mata Uang (Rp/USD/SGD) dan tekan OK/YES 
                                                </p>
                                                <p>
                                                    5. Masukkan total nominal pembayaran Kamu
                                                </p>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                Internet Banking
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                                ATM Transfer
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                    {/* <Collapse
                                    accordion
                                    style={{ width: "83%", margin: 'auto' }}
                                    expandIconPosition={"right"}
                                    defaultActiveKey={this.defaultKey}>
                                    </Collapse> */}
                                </Col>
            
                            </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
            
                        <br /><br />
            
                        <Row style={{ float: 'right' }}>
                        <>
                            <Button style={{ marginLeft: '30px' }} className="button-purple" onClick={() => {this.AddPayment(this.state.gambar);}}>Save</Button>
                        </>
                        </Row>
            
                    </Container>
                </Col>
                </Row>
              {/* <Footer /> */}
          </>
        );
      }
}

export default AddPayment;