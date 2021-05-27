import React, { Component } from 'react'
import { ButtonGroup, Card, Col, Dropdown, DropdownButton, Form, Image, Nav, Navbar, NavDropdown, Row, Table, Button, Accordion } from 'react-bootstrap';
import Logo from "../../components/image/image 1.png";
import Cake from "../../components/image/happy-birthday-cake.jpg";
import Navigation from "../Navigation/Navigation";
import { Bar } from "react-chartjs-2";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ['January', 'February', 'March',
           'April', 'May'],
            datasets: [
                {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
                }
            ]
        }
    }

    changeURL(url){
        this.props.history.push(url)
    }
    render(){
        return(
            <>
                <Navigation history={this.props.history} />
                <Row style={{marginRight: 0}}>
                    <Col md={2} id="sidebar-wrapper">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link onClick={() => {this.changeURL('/dashboard')}}>Dashboard</Nav.Link>
                            <Nav.Link eventKey="link-1">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">Master Data</Accordion.Toggle><Accordion.Collapse eventKey="0">
                                        <>
                                            <Nav.Link onClick={() => {this.changeURL('/user')}}>Users</Nav.Link>
                                            <Nav.Link onClick={() => {this.changeURL('/product')}}>Product</Nav.Link>
                                            <Nav.Link onClick={() => {this.changeURL('/stores')}}>Stores</Nav.Link>
                                            <Nav.Link eventKey="link-18">Payment</Nav.Link>
                                        </>
                                    </Accordion.Collapse>
                                </Accordion>
                            </Nav.Link>
                            <Nav.Link eventKey="link-2">Transaction</Nav.Link>
                            <Nav.Link eventKey="link-3">Report</Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={10} id="page-conternt-wrapper">
                        <Card className="mb-4">
                            <Card.Header>
                                <Card.Title>Revenue Status</Card.Title>
                            </Card.Header>
                            <Bar
                                data={this.state}
                                options={{
                                    title:{
                                        display:true,
                                        text:'',
                                        fontSize:20
                                    },
                                    legend:{
                                        display:true,
                                        position:'top'
                                    }
                                }}
                            />
                        </Card>
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Row className="p-4">
                                        <Col md={3}>
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M6.6 29.3335C3.31969 29.3335 0 30.3411 0 32.2668V41.0668C0 42.9925 3.31969 44.0002 6.6 44.0002C9.88031 44.0002 13.2 42.9925 13.2 41.0668V32.2668C13.2 30.3411 9.88031 29.3335 6.6 29.3335ZM6.6 30.8002C9.93437 30.8002 11.7333 31.8414 11.7333 32.2668C11.7333 32.6922 9.93437 33.7335 6.6 33.7335C3.26562 33.7335 1.46667 32.6922 1.46667 32.2668C1.46667 31.8414 3.26562 30.8002 6.6 30.8002ZM6.6 42.5335C3.26562 42.5335 1.46667 41.4922 1.46667 41.0668V40.0402C3.07764 40.7682 4.83327 41.1191 6.6 41.0668C8.36673 41.1191 10.1224 40.7682 11.7333 40.0402V41.0668C11.7333 41.4922 9.93437 42.5335 6.6 42.5335ZM6.6 39.6002C3.26562 39.6002 1.46667 38.5589 1.46667 38.1335V37.1069C3.07764 37.8349 4.83327 38.1858 6.6 38.1335C8.36673 38.1858 10.1224 37.8349 11.7333 37.1069V38.1335C11.7333 38.5589 9.93437 39.6002 6.6 39.6002ZM6.6 36.6668C3.26562 36.6668 1.46667 35.6256 1.46667 35.2002V34.1736C3.07764 34.9015 4.83327 35.2524 6.6 35.2002C8.36673 35.2524 10.1224 34.9015 11.7333 34.1736V35.2002C11.7333 35.6256 9.93437 36.6668 6.6 36.6668Z" fill="#FF8C7F"/><path d="M22.0004 23.4668C18.7201 23.4668 15.4004 24.4744 15.4004 26.4001V41.0668C15.4004 42.9925 18.7201 44.0001 22.0004 44.0001C25.2807 44.0001 28.6004 42.9925 28.6004 41.0668V26.4001C28.6004 24.4744 25.2807 23.4668 22.0004 23.4668ZM22.0004 24.9335C25.3348 24.9335 27.1337 25.9747 27.1337 26.4001C27.1337 26.8255 25.3348 27.8668 22.0004 27.8668C18.666 27.8668 16.8671 26.8255 16.8671 26.4001C16.8671 25.9747 18.666 24.9335 22.0004 24.9335ZM22.0004 42.5335C18.666 42.5335 16.8671 41.4922 16.8671 41.0668V40.0402C18.478 40.7682 20.2337 41.1191 22.0004 41.0668C23.7671 41.1191 25.5228 40.7682 27.1337 40.0402V41.0668C27.1337 41.4922 25.3348 42.5335 22.0004 42.5335ZM22.0004 39.6001C18.666 39.6001 16.8671 38.5589 16.8671 38.1335V37.1069C18.478 37.8348 20.2337 38.1857 22.0004 38.1335C23.7671 38.1857 25.5228 37.8348 27.1337 37.1069V38.1335C27.1337 38.5589 25.3348 39.6001 22.0004 39.6001ZM22.0004 36.6668C18.666 36.6668 16.8671 35.6255 16.8671 35.2001V34.1735C18.478 34.9015 20.2337 35.2524 22.0004 35.2001C23.7671 35.2524 25.5228 34.9015 27.1337 34.1735V35.2001C27.1337 35.6255 25.3348 36.6668 22.0004 36.6668ZM22.0004 33.7335C18.666 33.7335 16.8671 32.6922 16.8671 32.2668V31.2402C18.478 31.9682 20.2337 32.3191 22.0004 32.2668C23.7671 32.3191 25.5228 31.9682 27.1337 31.2402V32.2668C27.1337 32.6922 25.3348 33.7335 22.0004 33.7335ZM22.0004 30.8001C18.666 30.8001 16.8671 29.7589 16.8671 29.3335V28.3069C18.478 29.0348 20.2337 29.3857 22.0004 29.3335C23.7671 29.3857 25.5228 29.0348 27.1337 28.3069V29.3335C27.1337 29.7589 25.3348 30.8001 22.0004 30.8001Z" fill="#FF8C7F"/><path d="M37.3998 14.6665C34.1195 14.6665 30.7998 15.6741 30.7998 17.5998V41.0665C30.7998 42.9922 34.1195 43.9998 37.3998 43.9998C40.6801 43.9998 43.9998 42.9922 43.9998 41.0665V17.5998C43.9998 15.6741 40.6801 14.6665 37.3998 14.6665ZM37.3998 16.1332C40.7342 16.1332 42.5331 17.1744 42.5331 17.5998C42.5331 18.0252 40.7342 19.0665 37.3998 19.0665C34.0654 19.0665 32.2665 18.0252 32.2665 17.5998C32.2665 17.1744 34.0654 16.1332 37.3998 16.1332ZM37.3998 42.5332C34.0654 42.5332 32.2665 41.4919 32.2665 41.0665V40.0399C33.8774 40.7679 35.6331 41.1188 37.3998 41.0665C39.1665 41.1188 40.9222 40.7679 42.5331 40.0399V41.0665C42.5331 41.4919 40.7342 42.5332 37.3998 42.5332ZM37.3998 39.5998C34.0654 39.5998 32.2665 38.5586 32.2665 38.1332V37.1066C33.8774 37.8345 35.6331 38.1855 37.3998 38.1332C39.1665 38.1855 40.9222 37.8345 42.5331 37.1066V38.1332C42.5331 38.5586 40.7342 39.5998 37.3998 39.5998ZM37.3998 36.6665C34.0654 36.6665 32.2665 35.6252 32.2665 35.1998V34.1732C33.8774 34.9012 35.6331 35.2521 37.3998 35.1998C39.1665 35.2521 40.9222 34.9012 42.5331 34.1732V35.1998C42.5331 35.6252 40.7342 36.6665 37.3998 36.6665ZM37.3998 33.7332C34.0654 33.7332 32.2665 32.6919 32.2665 32.2665V31.2399C33.8774 31.9679 35.6331 32.3188 37.3998 32.2665C39.1665 32.3188 40.9222 31.9679 42.5331 31.2399V32.2665C42.5331 32.6919 40.7342 33.7332 37.3998 33.7332ZM37.3998 30.7998C34.0654 30.7998 32.2665 29.7586 32.2665 29.3332V28.3066C33.8774 29.0345 35.6331 29.3855 37.3998 29.3332C39.1665 29.3855 40.9222 29.0345 42.5331 28.3066V29.3332C42.5331 29.7586 40.7342 30.7998 37.3998 30.7998ZM37.3998 27.8665C34.0654 27.8665 32.2665 26.8252 32.2665 26.3998V25.3732C33.8774 26.1012 35.6331 26.4521 37.3998 26.3998C39.1665 26.4521 40.9222 26.1012 42.5331 25.3732V26.3998C42.5331 26.8252 40.7342 27.8665 37.3998 27.8665ZM37.3998 24.9332C34.0654 24.9332 32.2665 23.8919 32.2665 23.4665V22.4399C33.8774 23.1679 35.6331 23.5188 37.3998 23.4665C39.1665 23.5188 40.9222 23.1679 42.5331 22.4399V23.4665C42.5331 23.8919 40.7342 24.9332 37.3998 24.9332ZM37.3998 21.9998C34.0654 21.9998 32.2665 20.9586 32.2665 20.5332V19.5066C33.8774 20.2345 35.6331 20.5854 37.3998 20.5332C39.1665 20.5854 40.9222 20.2345 42.5331 19.5066V20.5332C42.5331 20.9586 40.7342 21.9998 37.3998 21.9998Z" fill="#FF8C7F"/><path d="M35.9334 0V1.46667H41.4964L27.5631 15.4H12.191L0.25 25.8479L1.2168 26.9521L12.7424 16.8667H28.1704L42.5334 2.50365V8.06667H44.0001V0H35.9334Z" fill="#FF8C7F"/></g><defs><clipPath id="clip0"><rect width="44" height="44" fill="white"/></clipPath></defs></svg>
                                        </Col>
                                        <Col>
                                            <b>Rp. 23.000.000</b>
                                            <p>Total Revenue</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Row className="p-4">
                                        <Col md={3}>
                                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M22.5 18.1934C26.7163 18.1934 30.1465 14.7632 30.1465 10.5469C30.1465 6.33059 26.7163 2.90039 22.5 2.90039C18.2837 2.90039 14.8535 6.33059 14.8535 10.5469C14.8535 14.7632 18.2837 18.1934 22.5 18.1934ZM22.5 5.53711C25.2624 5.53711 27.5098 7.78447 27.5098 10.5469C27.5098 13.3093 25.2624 15.5566 22.5 15.5566C19.7376 15.5566 17.4902 13.3093 17.4902 10.5469C17.4902 7.78447 19.7376 5.53711 22.5 5.53711Z" fill="#93E1FF"/><path d="M37.9688 18.1934C40.6342 18.1934 42.8027 16.0248 42.8027 13.3594C42.8027 10.6939 40.6342 8.52539 37.9688 8.52539C35.3033 8.52539 33.1348 10.6939 33.1348 13.3594C33.1348 16.0248 35.3033 18.1934 37.9688 18.1934ZM37.9688 11.1621C39.1803 11.1621 40.166 12.1478 40.166 13.3594C40.166 14.5709 39.1803 15.5566 37.9688 15.5566C36.7572 15.5566 35.7715 14.5709 35.7715 13.3594C35.7715 12.1478 36.7572 11.1621 37.9688 11.1621Z" fill="#93E1FF"/><path d="M39.0322 21.1816H36.9932C34.5903 21.1816 32.5161 22.6012 31.5709 24.6403C29.6249 22.516 26.8298 21.1816 23.7286 21.1816H21.2715C18.1703 21.1816 15.3751 22.516 13.4292 24.6403C12.4839 22.6012 10.4097 21.1816 8.00684 21.1816H5.96777C2.67715 21.1816 0 23.8426 0 27.1134V36.7119C0 38.1319 1.15963 39.2871 2.58504 39.2871H10.647C10.7822 40.8604 12.1051 42.0996 13.7129 42.0996H31.2872C32.8949 42.0996 34.2178 40.8604 34.3531 39.2871H42.3229C43.7991 39.2871 45.0001 38.0909 45.0001 36.6205V27.1134C45 23.8426 42.3229 21.1816 39.0322 21.1816ZM2.63672 27.1134C2.63672 25.2965 4.13104 23.8184 5.96777 23.8184H8.00684C9.84357 23.8184 11.3379 25.2965 11.3379 27.1134V28.0161C10.4513 30.3245 10.6348 31.7079 10.6348 36.6504H2.63672V27.1134ZM31.7285 39.0216C31.7285 39.265 31.5306 39.4629 31.2872 39.4629H13.7128C13.4694 39.4629 13.2715 39.2649 13.2715 39.0216V31.8183C13.2715 27.4071 16.8602 23.8184 21.2714 23.8184H23.7285C28.1398 23.8184 31.7285 27.4071 31.7285 31.8183V39.0216ZM42.3633 36.6205C42.3633 36.6659 42.8548 36.6504 34.3652 36.6504C34.3652 31.6713 34.5473 30.3207 33.6621 28.0161V27.1134C33.6621 25.2965 35.1564 23.8184 36.9932 23.8184H39.0322C40.869 23.8184 42.3633 25.2965 42.3633 27.1134V36.6205Z" fill="#93E1FF"/><path d="M7.03125 18.1934C9.69671 18.1934 11.8652 16.0248 11.8652 13.3594C11.8652 10.6939 9.69671 8.52539 7.03125 8.52539C4.36579 8.52539 2.19727 10.6939 2.19727 13.3594C2.19727 16.0248 4.36579 18.1934 7.03125 18.1934ZM7.03125 11.1621C8.24282 11.1621 9.22852 12.1478 9.22852 13.3594C9.22852 14.5709 8.24282 15.5566 7.03125 15.5566C5.81968 15.5566 4.83398 14.5709 4.83398 13.3594C4.83398 12.1478 5.81968 11.1621 7.03125 11.1621Z" fill="#93E1FF"/></g><defs><clipPath id="clip0"><rect width="45" height="45" fill="white"/></clipPath></defs></svg>
                                        </Col>
                                        <Col>
                                            <b>170</b>
                                            <p>Total Customer</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Row className="p-4">
                                        <Col md={3}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.2614 27.9274L40.0417 21.6034C39.8882 21.3021 39.5787 21.1123 39.2406 21.1123H22.9995H6.75828C6.42012 21.1123 6.11063 21.3021 5.95719 21.6034L2.73747 27.9274C2.59563 28.2061 2.60875 28.5384 2.77217 28.8051C2.93559 29.0717 3.22584 29.2341 3.53847 29.2341H4.66046V45.1009C4.66046 45.5973 5.06289 45.9998 5.55935 45.9998H40.4367C40.9332 45.9998 41.3356 45.5973 41.3356 45.1009V29.2342H42.4602C42.7729 29.2342 43.0632 29.0717 43.2265 28.8051C43.3901 28.5384 43.4032 28.2061 43.2614 27.9274ZM38.6896 22.9101L40.994 27.4363H26.7702L24.4658 22.9101H38.6896ZM7.30938 22.9101H21.5332L19.2287 27.4363H5.00491L7.30938 22.9101ZM39.538 44.2021H23.8984V39.2202C23.8984 38.7238 23.496 38.3213 22.9995 38.3213C22.5031 38.3213 22.1006 38.7238 22.1006 39.2202V44.2021H6.45841V29.2342H19.7798C20.118 29.2342 20.4274 29.0445 20.5809 28.7431L22.1006 25.758V31.1483C22.1006 31.6446 22.5031 32.0472 22.9995 32.0472C23.496 32.0472 23.8984 31.6446 23.8984 31.1483V25.758L25.4181 28.7431C25.5716 29.0445 25.8811 29.2342 26.2192 29.2342H39.538V44.2021Z" fill="#14CCB6"/><path d="M15.3132 39.2793H10.1948C9.69833 39.2793 9.2959 39.6818 9.2959 40.1782C9.2959 40.6745 9.69833 41.0771 10.1948 41.0771H15.3132C15.8097 41.0771 16.2121 40.6745 16.2121 40.1782C16.2121 39.6818 15.8097 39.2793 15.3132 39.2793Z" fill="#14CCB6"/><path d="M22.9993 18.4692C28.0856 18.4692 32.2237 14.326 32.2237 9.23335C32.2236 4.14206 28.0856 0 22.9993 0C17.9116 0 13.7725 4.14206 13.7725 9.23335C13.7725 14.326 17.9116 18.4692 22.9993 18.4692ZM22.9993 1.79777C27.0944 1.79777 30.4259 5.13335 30.4259 9.23335C30.4259 13.3348 27.0944 16.6714 22.9993 16.6714C18.9029 16.6714 15.5702 13.3348 15.5702 9.23335C15.5702 5.13335 18.9028 1.79777 22.9993 1.79777Z" fill="#14CCB6"/><path d="M18.969 10.5818L21.3616 12.6098C21.5245 12.748 21.7307 12.8231 21.9428 12.8231C21.9683 12.8231 21.9939 12.822 22.0196 12.8198C22.2581 12.7993 22.4786 12.6846 22.6322 12.501L27.1348 7.11972C27.4533 6.73904 27.4029 6.17211 27.0222 5.85346C26.6414 5.53507 26.0746 5.58532 25.756 5.96609L21.834 10.6535L20.1316 9.21035C19.7529 8.88935 19.1856 8.93592 18.8647 9.3148C18.5436 9.69359 18.5903 10.2607 18.969 10.5818Z" fill="#14CCB6"/><path d="M5.34029 10.1322H9.22941C9.72586 10.1322 10.1283 9.72972 10.1283 9.23336C10.1283 8.73699 9.72586 8.33447 9.22941 8.33447H5.34029C4.84384 8.33447 4.44141 8.73699 4.44141 9.23336C4.44141 9.72972 4.84384 10.1322 5.34029 10.1322Z" fill="#14CCB6"/><path d="M4.92111 3.87771L8.81023 5.92887C8.94398 5.99944 9.08735 6.03288 9.22884 6.03288C9.55154 6.03288 9.86363 5.85858 10.0247 5.55314C10.2563 5.11404 10.0881 4.5703 9.64898 4.33875L5.75977 2.28758C5.32084 2.05603 4.77693 2.22412 4.54538 2.66332C4.31382 3.10242 4.482 3.64616 4.92111 3.87771Z" fill="#14CCB6"/><path d="M4.54513 15.803C4.70613 16.1086 5.01822 16.2832 5.34119 16.2832C5.4824 16.2832 5.62578 16.2499 5.75935 16.1795L9.64847 14.1309C10.0877 13.8995 10.2562 13.3559 10.0248 12.9167C9.79346 12.4774 9.24981 12.309 8.81062 12.5402L4.9215 14.5888C4.4823 14.8202 4.31385 15.3638 4.54513 15.803Z" fill="#14CCB6"/><path d="M36.7661 10.1322H40.6552C41.1516 10.1322 41.5541 9.72972 41.5541 9.23336C41.5541 8.73699 41.1516 8.33447 40.6552 8.33447H36.7661C36.2696 8.33447 35.8672 8.73699 35.8672 9.23336C35.8672 9.72972 36.2696 10.1322 36.7661 10.1322Z" fill="#14CCB6"/><path d="M36.7679 6.03245C36.9093 6.03245 37.0528 5.99901 37.1865 5.92845L41.0756 3.87728C41.5147 3.64573 41.6829 3.10199 41.4514 2.66289C41.2197 2.22378 40.6761 2.05542 40.237 2.28715L36.3479 4.33832C35.9088 4.56987 35.7406 5.11361 35.9721 5.55271C36.1332 5.85815 36.4451 6.03245 36.7679 6.03245Z" fill="#14CCB6"/><path d="M36.3483 14.131L40.2374 16.1795C40.3711 16.2499 40.5144 16.2833 40.6556 16.2833C40.9785 16.2833 41.2906 16.1088 41.4516 15.8031C41.683 15.3639 41.5145 14.8202 41.0753 14.5889L37.1861 12.5403C36.7469 12.3089 36.2033 12.4774 35.9719 12.9168C35.7406 13.356 35.9091 13.8996 36.3483 14.131Z" fill="#14CCB6"/><path d="M22.9995 34.2856C22.503 34.2856 22.1006 34.6882 22.1006 35.1845V35.1897C22.1006 35.686 22.503 36.086 22.9995 36.086C23.4959 36.086 23.8984 35.681 23.8984 35.1846C23.8984 34.6883 23.4959 34.2856 22.9995 34.2856Z" fill="#14CCB6"/></svg>
                                        </Col>
                                        <Col>
                                            <b>50</b>
                                            <p>Order Place</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Row className="p-4">
                                        <Col md={3}>
                                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M19.8594 28.8281C20.744 28.8281 21.4609 29.5451 21.4609 30.4297C21.4609 31.3143 20.744 32.0312 19.8594 32.0312H17.6172C16.7326 32.0312 16.0156 31.3143 16.0156 30.4297C16.0156 29.5451 16.7326 28.8281 17.6172 28.8281H19.8594ZM32.9922 20.2598C32.9922 19.3752 32.2752 18.6582 31.3906 18.6582H17.6172C16.7326 18.6582 16.0156 19.3752 16.0156 20.2598C16.0156 21.1444 16.7326 21.8613 17.6172 21.8613H31.3906C32.2752 21.8613 32.9922 21.1444 32.9922 20.2598ZM17.6172 12.252H31.3906C32.2752 12.252 32.9922 11.535 32.9922 10.6504C32.9922 9.76578 32.2752 9.04883 31.3906 9.04883H17.6172C16.7326 9.04883 16.0156 9.76578 16.0156 10.6504C16.0156 11.535 16.7326 12.252 17.6172 12.252ZM11.2109 28.8281H9.60938C8.72476 28.8281 8.00781 29.5451 8.00781 30.4297C8.00781 31.3143 8.72476 32.0312 9.60938 32.0312H11.2109C12.0956 32.0312 12.8125 31.3143 12.8125 30.4297C12.8125 29.5451 12.0956 28.8281 11.2109 28.8281ZM11.2109 18.6582H9.60938C8.72476 18.6582 8.00781 19.3752 8.00781 20.2598C8.00781 21.1444 8.72476 21.8613 9.60938 21.8613H11.2109C12.0956 21.8613 12.8125 21.1444 12.8125 20.2598C12.8125 19.3752 12.0956 18.6582 11.2109 18.6582ZM11.2109 9.04883H9.60938C8.72476 9.04883 8.00781 9.76578 8.00781 10.6504C8.00781 11.535 8.72476 12.252 9.60938 12.252H11.2109C12.0956 12.252 12.8125 11.535 12.8125 10.6504C12.8125 9.76578 12.0956 9.04883 11.2109 9.04883ZM40.5311 38.2658C41.1564 38.8914 41.1564 39.9055 40.5311 40.5308C40.2183 40.8436 39.8082 41 39.3984 41C38.9887 41 38.5786 40.8436 38.2658 40.5311L35.5566 37.8219C34.4777 38.4666 33.2171 38.8379 31.8711 38.8379C27.8972 38.8379 24.6641 35.6047 24.6641 31.6309C24.6641 27.657 27.8972 24.4238 31.8711 24.4238C35.845 24.4238 39.0781 27.657 39.0781 31.6309C39.0781 33.1014 38.6352 34.4699 37.876 35.6113L40.5311 38.2658ZM31.8711 35.6348C34.0789 35.6348 35.875 33.8386 35.875 31.6309C35.875 29.4231 34.0789 27.627 31.8711 27.627C29.6633 27.627 27.8672 29.4231 27.8672 31.6309C27.8672 33.8386 29.6633 35.6348 31.8711 35.6348ZM34.5938 0H6.40625C2.87374 0 0 2.87374 0 6.40625V34.5938C0 38.1263 2.87374 41 6.40625 41H22.9023C23.787 41 24.5039 40.2831 24.5039 39.3984C24.5039 38.5138 23.787 37.7969 22.9023 37.7969H6.40625C4.64015 37.7969 3.20312 36.3598 3.20312 34.5938V6.40625C3.20312 4.64015 4.64015 3.20312 6.40625 3.20312H34.5938C36.3598 3.20312 37.7969 4.64015 37.7969 6.40625V22.2617C37.7969 23.1463 38.5138 23.8633 39.3984 23.8633C40.2831 23.8633 41 23.1463 41 22.2617V6.40625C41 2.87374 38.1263 0 34.5938 0Z" fill="#FFDA7D"/></g><defs><clipPath id="clip0"><rect width="41" height="41" fill="white"/></clipPath></defs></svg>
                                        </Col>
                                        <Col>
                                            <b>1123</b>
                                            <p>Total Visitor</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5}>
                                <Card style={{paddingBottom: '18%'}}>
                                    <Card.Header>
                                        <Card.Title>Earning Reports</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Item Count</th>
                                                    <th>Earnings</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Jan, 21 2021</td>
                                                    <td>23</td>
                                                    <td>Rp. 27.530.000</td>
                                                </tr>
                                                <tr>
                                                    <td>Jan, 21 2021</td>
                                                    <td>23</td>
                                                    <td>Rp. 27.530.000</td>
                                                </tr>
                                                <tr>
                                                    <td>Jan, 21 2021</td>
                                                    <td>23</td>
                                                    <td>Rp. 27.530.000</td>
                                                </tr>
                                                <tr>
                                                    <td>Jan, 21 2021</td>
                                                    <td>23</td>
                                                    <td>Rp. 27.530.000</td>
                                                </tr>
                                                <tr>
                                                    <td>Jan, 21 2021</td>
                                                    <td>23</td>
                                                    <td>Rp. 27.530.000</td>
                                                </tr>
                                                <tr>
                                                    <td>Jan, 21 2021</td>
                                                    <td>23</td>
                                                    <td>Rp. 27.530.000</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>Top Selling Product</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Sell</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Image src={Cake} style={{width: '50px', height: '50px', marginRight: '10px'}} roundedCircle />
                                                        Redvelvet Cheese Cake
                                                    </td>
                                                    <td>Rp. 365.000</td>
                                                    <td>50</td>
                                                    <td><Button variant="outline-danger">Out of Stock</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Image src={Cake} style={{width: '50px', height: '50px', marginRight: '10px'}} roundedCircle />
                                                        Redvelvet Cheese Cake
                                                    </td>
                                                    <td>Rp. 365.000</td>
                                                    <td>50</td>
                                                    <td><Button variant="outline-danger">Out of Stock</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Image src={Cake} style={{width: '50px', height: '50px', marginRight: '10px'}} roundedCircle />
                                                        Redvelvet Cheese Cake
                                                    </td>
                                                    <td>Rp. 365.000</td>
                                                    <td>50</td>
                                                    <td><Button variant="outline-danger">Out of Stock</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Image src={Cake} style={{width: '50px', height: '50px', marginRight: '10px'}} roundedCircle />
                                                        Redvelvet Cheese Cake
                                                    </td>
                                                    <td>Rp. 365.000</td>
                                                    <td>50</td>
                                                    <td><Button variant="outline-danger">Out of Stock</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Image src={Cake} style={{width: '50px', height: '50px', marginRight: '10px'}} roundedCircle />
                                                        Redvelvet Cheese Cake
                                                    </td>
                                                    <td>Rp. 365.000</td>
                                                    <td>50</td>
                                                    <td><Button variant="outline-danger">Out of Stock</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
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

export default Dashboard;