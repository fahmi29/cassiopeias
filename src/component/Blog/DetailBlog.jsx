import React,{ Component } from "react";
import Navigation from "../Navigation/Navigation";
import BusinessCatalog from "../../components/image/business_catalog.jpeg";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";

class DetailBlog extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <Navigation history={this.props.history} />
                <Card className="mb-5" style={{border: 'none' }}>
                    <Row>
                        <Col md={{ offset: 1 }}>
                            <Card.Img src={BusinessCatalog} />
                            {/* <Image src={BusinessCatalog} /> */}
                        </Col>
                        <Col md="6">
                            <Card.Body style={{marginTop: '20%'}}>
                                <Button variant="light" style={{backgroundColor: '#ad6600', borderRadius: '10rem', color: 'white', cursor: 'default'}} rounded className="ml-4">APR 7, 2021</Button>
                                <Card.Title style={{fontSize: '30px', fontWeight: 'bold'}}>Snack Box, Coffee Break, Hamper & Gifts, Hot Meals untuk Pesanan Korporat</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                {/* <Card> */}
                    <Row>
                        <Col md={{ offset: 1, span: 11 }}>
                            <a href="#"><h4>KLIK DI SINI UNTUK DOWNLOAD KATALOG LENGKAP</h4></a>
                        </Col>
                        <Col md={{ offset: 1 }}>
                            <p style={{fontSize: '16px'}}>Mengadakan acara perusahaan yang melibatkan pertemuan banyak orang seperti rapat bisnis, catering, seminar, atau gathering pegawai, rasanya belum lengkap tanpa menyediakan makanan serta minuman pendamping seperti cake, roti, pastry, dan coffee (kopi) atau teh yang disajikan saat jam makan siang ataupun coffee break.</p>
                        </Col>
                        <Col md={{ span: 12 }} className="mb-3">
                            <Row>
                                <Col md={{ offset: 3, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 12 }} className="mb-3">
                            <Row>
                                <Col md={{ offset: 3, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                            </Row>
                        </Col>
                        <Col md={{ offset: 4 }} className="mb-5">
                            <i>Contoh roti / pastry The Harvest untuk kebutuhan kantor (corporate)</i>
                        </Col>
                        <Col md={{ span: 12 }} className="mb-3">
                            <Row>
                                <Col md={{ offset: 3, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 12 }} className="mb-3">
                            <Row>
                                <Col md={{ offset: 3, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                            </Row>
                        </Col>
                        <Col md={{ offset: 4 }} className="mb-5">
                            <i>Contoh roti / pastry The Harvest untuk kebutuhan kantor (corporate)</i>
                        </Col>
                        <Col md={{ offset: 1, span: 8}}>
                            Setelah acara selesai, membagikan hamper atau gift set tentunya akan menambah kesan baik tentang perusahaan Anda di mata semua tamu yang hadir.
                        </Col>
                        <Col md={{ span: 12 }} className="mb-3">
                            <Row>
                                <Col md={{ offset: 3, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                            </Row>
                        </Col>
                        <Col md={{ offset: 4 }} className="mb-5">
                            <p>Contoh gift set The Harvest untuk kebutuhan kantor (corporate)</p>
                        </Col>
                        <Col md={{ offset: 1, span: 8}}>
                            The Harvest menyediakan solusi tepat dan praktis untuk kebutuhan acara perusahaan Anda, melalui paket Snack Box, Hot Meals, Coffee Break, Hamper & Gifts, maupun ragam cake dan roti yang paling cocok dengan jenis acara dan budget perusahaan Anda.
                        </Col>
                        <Col md={{ span: 12 }} className="mb-3">
                            <Row>
                                <Col md={{ offset: 3, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 12 }} className="mb-3">
                            <Row>
                                <Col md={{ offset: 3, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                                <Col md={{ offset: 1, span: 1 }}><Image src={BusinessCatalog} style={{width: '200px', height: '200px'}} /></Col>
                            </Row>
                        </Col>
                        <Col md={{ offset: 4 }} className="mb-5">
                            <i>Contoh paket snack box The Harvest untuk acara kantor (corporate)</i>
                        </Col>
                    </Row>
                    <Footer  history={this.props.history} />
                {/* </Card> */}
            </>
        )
    }
}

export default DetailBlog;