import React,{ Component, Fragment } from "react";
import Logo from "../../components/image/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Carousel, Form, FormControl, Button, Row, Col, Card, Image, Container, Modal, DropdownButton, Dropdown, ButtonGroup, InputGroup } from 'react-bootstrap';
// import Navigation from './Navigation/Navigation';
import Kue from "../../components/image/landing.jpg";
import Footer from "../Footer/Footer";
import Birthday_cake_chocolate from "../../components/image/chocolate-birthday-cake.jpeg";
import Birthday_cake_custom from "../../components/image/birthday-cake-custom.jpg";
import Birthday_cake_pink from "../../components/image/happy-birthday-cake-pink.jpg";
import Birthday_cake from "../../components/image/happy-birthday-cake.jpg";
import Cupcakes_moist from "../../components/image/moist-chocolate-cupcakes-.jpg";
import Cupcakes_vanilla from "../../components/image/Vanilla-Cupcakes.jpg";
import Cupcakes_christmas from "../../components/image/Christmas-Tree-Cupcakes.jpg";
import Cupcakes_chocholate from "../../components/image/Chocolate_Cupcakes.jpg";
import Login from "../Login";

class Catalog extends Component {
    render(){
        return(
            <>
                <Router>
                <Container fluid>
                    <Fragment>
                    <Navbar expand="lg">
                            <Navbar.Brand href="/"><img style={{cursor: 'pointer', width: '60%'}} src={Logo} /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav>
                                        <NavDropdown className="dropdown" title="Categories">
                                            {/* <NavDropdown.Item>CAKES & SPESIAL</NavDropdown.Item> */}
                                                {['right'].map((direction) => (
                                                    <DropdownButton
                                                        as={ButtonGroup}
                                                        key={direction}
                                                        id={`dropdown-button-drop-${direction}`}
                                                        drop={direction}
                                                        variant="none"
                                                        title={` CAKES & SPESIAL `}
                                                        // style={{backgroundColor: 'white', color: 'black', border: 'none'}}
                                                        >
                                                        <Dropdown.Item eventKey="1" >BIRTHDAY CAKE</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2" >WHOLE CAKES</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3" >CUP CAKES</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4" >SLICE CAKES</Dropdown.Item>
                                                        <Dropdown.Item eventKey="5" >ICE CREAM CAKES</Dropdown.Item>
                                                        <Dropdown.Item eventKey="6" >MACARONS</Dropdown.Item>
                                                        <Dropdown.Item eventKey="7" >HOME MADE ICE CREAM</Dropdown.Item>
                                                    </DropdownButton>
                                                ))}
                                            <NavDropdown.Item>GIFT & HAMPERS</NavDropdown.Item>
                                            <NavDropdown.Item>CHOCOLATES</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav.Link href="#link">TREATS</Nav.Link>
                                    <Nav.Link href="#link">STORES</Nav.Link>
                                    <Nav.Link href="#link">BLOG</Nav.Link>
                                    <Nav.Link>|</Nav.Link>
                                    <Form.Group className="mt-2">
                                        {/* <Form.Control type="text" placeholder="Search" sty /> */}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.8816 14.5337C17.3095 13.8947 15.9399 12.273 14.8135 12.0238C14.7938 11.9974 14.7677 11.9764 14.7354 11.9596C14.7356 11.9592 14.7359 11.9588 14.7362 11.9584C14.6445 11.9166 14.5512 11.8792 14.4589 11.8394C16.7308 8.90831 15.0861 4.16002 12.6826 1.87708C9.62976 -1.02236 4.95466 -0.376597 2.2129 2.53838C-0.376786 5.29181 -0.872148 10.3173 1.68542 13.2627C3.71944 15.6055 8.88651 17.1476 11.2937 14.4555C13.0337 16.2621 18.3953 22.6052 19.8874 18.8116C20.4561 17.3654 18.7287 15.4797 17.8816 14.5337ZM16.8861 14.4353C16.7702 14.3569 16.6586 14.2812 16.5544 14.2084C15.018 13.1364 13.3279 12.2694 11.8625 11.0969C11.9943 10.891 12.1095 10.6773 12.2143 10.4592C12.4527 10.6669 12.7007 10.8638 12.9519 11.0552C13.2265 11.2647 13.504 11.5133 13.7941 11.7275C13.7925 11.7379 13.7877 11.7483 13.7871 11.7586C13.716 11.8164 13.7156 11.9411 13.7737 12.0142C13.7728 12.0144 13.7718 12.0147 13.771 12.015C13.7734 12.0175 13.7769 12.019 13.7793 12.0216C13.7869 12.0302 13.7951 12.0376 13.8045 12.0441C13.8227 12.1487 13.902 12.2306 14.0061 12.2748C14.0015 12.2736 14.0024 12.2742 14.0097 12.2771C14.0112 12.2777 14.0122 12.2789 14.0138 12.2793C14.0157 12.2802 14.0177 12.2808 14.0197 12.2815C14.0282 12.2854 14.038 12.2898 14.0499 12.2973C14.0736 12.3125 14.0888 12.3254 14.1128 12.3458C14.1437 12.4705 14.2459 12.5848 14.3939 12.6008C15.2778 12.6947 16.2496 13.7804 16.8861 14.4353ZM10.9449 11.1379C10.8988 11.1438 10.8547 11.1657 10.8286 11.2083C10.7603 11.3197 10.6896 11.4237 10.6174 11.5229C10.5807 11.5621 10.5482 11.6043 10.5104 11.6424C10.4772 11.6759 10.4546 11.7115 10.4375 11.7478C9.29422 13.1011 7.72059 13.0789 6.04575 12.1754C3.85086 10.9913 2.80311 8.5004 3.90798 6.20128C4.95392 4.02487 7.2264 3.30993 9.29899 4.09894C9.51954 4.22579 9.73839 4.35115 9.95375 4.47567C10.282 4.66531 10.594 4.87751 10.9004 5.0977C12.5378 6.70625 12.3466 9.3192 10.9449 11.1379ZM12.4542 9.87046C12.7373 10.048 13.0144 10.2333 13.2855 10.4292C13.587 10.6472 13.8658 10.934 14.1807 11.1375C14.1067 11.2522 14.0269 11.364 13.9404 11.4717C13.7327 11.3399 13.5157 11.2185 13.3172 11.084C12.9604 10.8424 12.6173 10.5826 12.271 10.3272C12.3387 10.1772 12.3988 10.0245 12.4542 9.87046ZM14.3614 10.8245C14.1251 10.6008 13.8227 10.4249 13.5622 10.2453C13.232 10.0173 12.8888 9.80938 12.5395 9.61261C12.635 9.30324 12.7074 8.98845 12.7463 8.67014C13.0254 9.01409 14.1727 9.6854 14.7025 9.97806C14.618 10.2735 14.5031 10.556 14.3614 10.8245ZM14.8064 9.53918C14.5055 9.36007 14.1794 9.20746 13.8818 9.04198C13.6395 8.90735 13.3983 8.77135 13.1545 8.63971C13.0816 8.60033 13.0007 8.53626 12.9204 8.51402C12.8789 8.50253 12.8567 8.5104 12.8409 8.52392C12.8357 8.51179 12.828 8.50051 12.8147 8.49348C12.8015 8.48657 12.7888 8.48007 12.7744 8.47614C12.7726 8.47561 12.771 8.47678 12.7693 8.47646C12.7894 8.24105 12.7995 8.00554 12.7887 7.7712C13.414 8.34705 14.1476 8.82318 14.8496 9.29079C14.8375 9.37444 14.8222 9.45681 14.8064 9.53918ZM14.8966 8.84797C14.2071 8.3546 13.4226 8.01161 12.7664 7.46386C12.7282 7.10512 12.6537 6.75137 12.537 6.40944C13.3133 7.07989 14.0816 7.76248 14.9117 8.35929C14.9133 8.52349 14.9073 8.68642 14.8966 8.84797ZM12.2207 2.34086C12.7356 2.77368 13.2091 3.35399 13.6133 4.01763C12.8445 3.36878 11.9704 2.79443 11.1788 2.21401C10.4822 1.70319 9.70119 1.11479 8.85959 0.787435C10.0611 0.988145 11.2272 1.50599 12.2207 2.34086ZM7.9723 0.702831C7.98248 0.716878 7.99382 0.730819 8.01565 0.738056C10.4286 1.54356 11.8782 3.89525 14.0996 4.96467C14.1052 4.96733 14.1106 4.96723 14.1161 4.96935C14.2421 5.24669 14.3587 5.53062 14.4578 5.8221C12.0584 3.90983 9.34573 2.44122 6.78731 0.755403C7.17934 0.700489 7.57593 0.688464 7.9723 0.702831ZM6.52077 0.796907C9.19841 2.76601 11.9982 4.56155 14.6693 6.54098C14.7693 6.94101 14.8411 7.34605 14.8793 7.74886C13.9894 7.09064 13.1129 6.40518 12.2328 5.72175C11.926 5.14952 11.4966 4.62497 10.9181 4.19067C10.2611 3.69752 9.55589 3.37421 8.84263 3.20851C7.71243 2.43622 6.54164 1.72841 5.29868 1.14001C5.69559 0.985059 6.10521 0.872253 6.52077 0.796907ZM5.11459 1.21865C5.84682 1.91656 6.70274 2.52518 7.59172 3.08294C7.26042 3.09209 6.93187 3.13072 6.61096 3.20745C6.29365 2.95981 5.90787 2.77921 5.57116 2.56467C5.129 2.28308 4.70847 1.9686 4.31485 1.62199C4.57334 1.46661 4.84158 1.33518 5.11459 1.21865ZM4.14199 1.72649C4.50138 2.08375 4.89256 2.40237 5.29879 2.70503C5.57381 2.90989 5.87141 3.1503 6.18576 3.32973C5.92896 3.41699 5.67746 3.52394 5.43498 3.65559C5.19111 3.46052 4.93092 3.28173 4.69119 3.08411C4.31326 2.77251 3.94115 2.45367 3.56576 2.13898C3.75155 1.9885 3.94497 1.85356 4.14199 1.72649ZM3.37012 2.29744C3.73936 2.63118 4.10574 2.968 4.47891 3.29737C4.67784 3.47297 4.88312 3.67857 5.10601 3.85002C4.99324 3.92302 4.88249 4.00082 4.77439 4.08393C4.67402 4.00678 4.56051 3.9458 4.45082 3.87396C4.21861 3.72167 3.99436 3.55715 3.772 3.39092C3.48384 3.17573 3.20118 2.95033 2.91598 2.73249C3.06182 2.57807 3.21411 2.43419 3.37012 2.29744ZM2.66841 2.99567C2.69777 2.96108 2.73051 2.93182 2.7604 2.89798C3.00586 3.17073 3.29869 3.40241 3.58611 3.63292C3.83867 3.83544 4.15958 4.1563 4.48866 4.32487C4.33339 4.463 4.18194 4.60816 4.03929 4.76854C4.0323 4.73661 4.01174 4.70681 3.97284 4.68617C3.35401 4.35658 2.77206 4.00475 2.22943 3.5746C2.36805 3.37432 2.51272 3.17946 2.66841 2.99567ZM2.12959 3.71657C2.63905 4.19567 3.2085 4.61657 3.83379 4.92487C3.85287 4.93423 3.87152 4.9386 3.88943 4.93987C3.74943 5.11089 3.61441 5.28989 3.48988 5.48379C3.43318 5.57202 3.38082 5.66066 3.33101 5.74953C3.13685 5.61575 2.9304 5.49614 2.73942 5.35992C2.36986 5.09621 2.02001 4.80461 1.66942 4.51643C1.66687 4.5144 1.66412 4.51408 1.66147 4.51217C1.80497 4.23803 1.96076 3.97176 2.12959 3.71657ZM1.54499 4.73118C2.03993 5.15772 2.59316 5.70845 3.1944 6.01249C3.09276 6.22203 3.00723 6.43285 2.9393 6.64431C2.38088 6.23108 1.80868 5.82913 1.23743 5.43197C1.32964 5.19326 1.43329 4.95999 1.54499 4.73118ZM1.15381 5.66545C1.70397 6.11019 2.24766 6.59781 2.85165 6.95421C2.79675 7.17769 2.75765 7.40128 2.7373 7.62413C2.55278 7.30508 2.1562 7.07372 1.86496 6.87291C1.57255 6.67113 1.25778 6.50628 0.934005 6.36198C0.996853 6.12657 1.07221 5.8949 1.15381 5.66545ZM0.8914 6.51586C1.15339 6.65272 1.40934 6.79958 1.65532 6.96549C2.0217 7.2126 2.28115 7.59295 2.64382 7.82708C2.6736 7.84634 2.70052 7.84293 2.72437 7.83218C2.71017 8.15145 2.72606 8.46869 2.77736 8.78039C2.49576 8.55404 2.18502 8.34694 1.92038 8.12601C1.53026 7.80036 1.14565 7.46801 0.759134 7.13789C0.795168 6.9291 0.840317 6.72189 0.8914 6.51586ZM0.720026 7.40288C1.05451 7.70991 1.38825 8.01778 1.72527 8.32204C2.07586 8.63864 2.46704 9.08188 2.89828 9.31484C3.15391 10.2169 3.66496 11.0587 4.35745 11.7629C3.12509 10.649 1.90841 9.51587 0.633545 8.44559C0.636936 8.0976 0.671486 7.74949 0.720026 7.40288ZM1.91996 12.5366C1.48162 11.9649 1.16844 11.3364 0.956685 10.6787C1.63646 11.4585 2.6311 12.1639 3.26053 12.7161C4.03018 13.3912 4.81487 14.0478 5.61769 14.6826C5.73544 14.7756 5.86166 14.8878 5.99276 15.0026C4.34971 14.6118 2.8082 13.6954 1.91996 12.5366ZM6.83649 15.1555C6.48134 14.8337 6.02254 14.5622 5.67598 14.2754C4.87634 13.6134 4.08476 12.9412 3.3042 12.2565C2.58797 11.6283 1.87354 10.998 1.19207 10.3314C1.12732 10.2681 0.944391 10.1129 0.76846 9.94741C0.688232 9.54599 0.647216 9.1368 0.636194 8.72537C3.04041 10.9234 5.26286 13.3576 7.95927 15.2011C7.58896 15.2176 7.21262 15.2015 6.83649 15.1555ZM8.46745 15.1562C7.23244 14.2755 6.08094 13.2998 4.95381 12.2954C5.18359 12.4789 5.42311 12.6528 5.67799 12.8075C6.06472 13.0419 6.52797 13.2332 7.01878 13.3604C7.69378 14.0192 8.55086 14.4879 9.3576 14.9609C9.06933 15.0505 8.77194 15.1166 8.46745 15.1562ZM9.59299 14.8808C9.61471 14.8179 9.60306 14.7434 9.53056 14.6969C8.78805 14.2207 7.95821 13.9324 7.24855 13.4119C7.65012 13.4984 8.06429 13.5396 8.46639 13.5288C8.80024 13.7345 9.13737 13.9345 9.47333 14.1366C9.70639 14.2766 9.94591 14.4693 10.1993 14.6034C10.0036 14.7097 9.80198 14.8039 9.59299 14.8808ZM10.5023 14.4209C10.2849 14.2299 9.99964 14.1113 9.74507 13.98C9.43475 13.8201 9.12221 13.6643 8.81073 13.5064C9.09932 13.4749 9.37509 13.4092 9.63209 13.3119C10.0318 13.6096 10.4414 13.8925 10.8622 14.1575C10.7461 14.2521 10.626 14.3398 10.5023 14.4209ZM17.1614 18.9757C16.2798 18.5189 15.5379 17.7774 14.8236 17.0992C13.7657 16.0946 12.7777 14.8163 11.4875 14.0846C11.4595 13.9412 11.3112 13.8367 11.166 13.9102C11.1568 13.9058 11.1484 13.9 11.1392 13.8957C11.1209 13.8872 11.1023 13.8836 11.0839 13.8825C10.6853 13.6593 10.2877 13.4346 9.89959 13.1931C10.0626 13.1098 10.2109 13.0052 10.3487 12.8878C13.1908 14.768 15.3649 17.4928 18.2829 19.2684C17.8746 19.2538 17.4386 19.1192 17.1614 18.9757ZM18.8368 19.1908C15.7728 17.4107 13.5963 14.4738 10.4934 12.7552C10.6379 12.6067 10.7649 12.4372 10.8639 12.2377C10.9156 12.2226 10.967 12.1951 11.0148 12.1489C11.0299 12.1344 11.0429 12.1183 11.0577 12.1036C13.7386 14.352 16.4201 16.7274 19.269 18.7574C19.1898 18.9769 19.0344 19.1148 18.8368 19.1908ZM11.1819 11.9725C11.386 11.7578 11.5699 11.5281 11.7369 11.2885C14.0173 13.2989 16.6974 14.6573 18.8122 16.8791C18.8414 16.9099 18.8763 16.925 18.9115 16.9284C19.1524 17.39 19.3126 17.872 19.3246 18.3604C16.8225 16.0351 13.9965 13.8957 11.1819 11.9725Z" fill="black"/>
                                        </svg>

                                    </Form.Group>
                                </Nav>
                                <Nav className="mr-4">
                                    <Form>
                                        <a id="chart" className="btn" href="#">
                                            <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M0.11409 12.0342C2.366 12.0342 4.50563 12.0342 6.63432 12.0342C8.57069 9.38763 10.4587 6.80769 12.3473 4.22898C12.6692 3.78851 12.9611 3.31471 13.329 2.92297C14.138 2.06053 14.8681 2.05991 15.4715 3.0772C17.3031 6.16425 20.1665 8.20562 22.2986 10.9793C22.761 11.5808 23.3051 11.7319 23.9748 11.6937C24.9605 11.6388 25.9514 11.5468 26.9326 11.6067C27.308 11.6301 27.7583 11.9571 27.9834 12.2927C28.0818 12.4395 27.7226 12.9707 27.5325 13.3007C27.236 13.8146 26.7616 14.2619 26.6136 14.8146C25.7223 18.1522 24.8787 21.5051 24.0813 24.8691C23.9316 25.4996 24.06 26.206 24.06 26.9716C22.9418 27.7026 21.6716 27.6928 20.41 27.6934C16.535 27.6952 12.6594 27.6292 8.78546 27.6983C6.48749 27.7384 6.21399 27.7057 5.50577 25.3682C4.5229 22.1251 3.64655 18.8462 2.72932 15.5808C2.4564 14.6117 2.28366 13.6974 0.926527 13.8313C0.107757 13.9115 -0.184168 13.1113 0.11409 12.0342ZM22.0752 25.8254C23.1617 21.523 24.1797 17.4927 25.2732 13.1644C18.005 13.3384 11.0235 13.5062 4.02484 13.6746C3.99893 14.0318 3.93502 14.2255 3.97993 14.3846C4.90292 17.645 5.81151 20.911 6.7846 24.1547C7.12834 25.3004 7.83195 25.8932 9.1102 25.8926C12.7498 25.8907 16.3893 26.074 20.03 26.1369C20.6985 26.1486 21.371 25.9382 22.0752 25.8254ZM8.82864 11.5839C8.91616 11.7251 9.00368 11.8658 9.09178 12.0071C12.8027 11.8794 16.5143 11.7517 20.2252 11.624C20.2799 11.4833 20.3346 11.3433 20.3893 11.2026C18.8151 9.52521 17.2409 7.84781 15.9005 6.41965C14.6378 6.60102 13.6658 6.74106 12.2494 6.94465C11.297 8.23585 10.0626 9.90954 8.82864 11.5839ZM14.3263 4.56644C14.138 4.83356 13.9664 5.03406 13.8582 5.26849C13.8369 5.31476 14.1317 5.60779 14.1581 5.58867C14.3648 5.44184 14.5531 5.25677 14.7115 5.05195C14.7276 5.02974 14.5192 4.80642 14.3263 4.56644Z" fill="#231F20"/>
                                                    <path d="M8.61585 23.2244C8.52717 20.9684 8.4005 18.708 8.3838 16.4464C8.38092 16.0244 8.82083 15.5987 9.25612 14.8165C9.55208 15.6172 9.77664 15.9744 9.80773 16.3501C9.96434 18.2564 10.0997 20.1664 10.1826 22.0769C10.2298 23.1701 10.1791 23.1726 8.61585 23.2244Z" fill="#231F20"/>
                                                    <path d="M14.0676 15.1626C14.0676 15.972 14.0457 16.6993 14.0727 17.4254C14.1234 18.7771 14.2046 20.1269 14.2691 21.478C14.2835 21.7846 14.3992 22.193 14.2616 22.3774C14.0065 22.7192 13.6225 23.0542 13.243 23.1375C13.0709 23.1757 12.5866 22.6112 12.5786 22.3108C12.529 20.3928 12.5337 18.4693 12.6074 16.5519C12.6333 15.8998 12.8204 15.1737 14.0676 15.1626Z" fill="#231F20"/>
                                                    <path d="M18.0438 22.1295C16.777 22.697 16.53 22.5909 16.4166 21.2818C16.283 19.7457 16.1903 18.2046 16.1074 16.6642C16.0918 16.3742 16.1183 15.9967 16.2772 15.803C16.4811 15.5556 16.8594 15.2959 17.1248 15.3354C17.3678 15.3718 17.6735 15.7654 17.7484 16.0609C17.8664 16.5266 17.8129 17.0418 17.8347 17.5359C17.9004 19.0048 17.9678 20.4737 18.0438 22.1295Z" fill="#231F20"/>
                                                    <path d="M20.2198 22.8438C20.2198 20.605 20.1979 18.4649 20.2463 16.3273C20.2526 16.0441 20.6182 15.7708 20.8606 15.4334C21.6477 15.7628 21.7105 16.434 21.7139 17.0892C21.7214 18.5673 21.684 20.0448 21.6708 21.523C21.6639 22.291 21.4312 22.8327 20.2198 22.8438Z" fill="#231F20"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect width="28" height="30" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    <Button id="signup" variant="outline-dark" onClick={this.onOpenSignModal}>
                                        Register
                                    </Button>
                                    <Button id="login" variant="dark" className="ml-1" onClick={this.onOpenLoginModal}>
                                        Login
                                    </Button>
                                    {this.state.modalLogin ? (
                                        <Login state={this.state} modalLoginIsOpen={this.state.modalLogin} modalSignIsOpen={this.onOpenSignModal} redirect={(e) => { this.props.history.push(e); }} onClose={() => { this.setState({ modalLogin: false }); }} />
                                    ) : null}
                                    </Form>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Fragment>
                <Nav className="justify-content-center">
                    <a className="btn" onClick={() => {this.changeURL("/Catalog")}}>Test</a>
                </Nav>
                <Card style={{backgroundImage: `url(${Kue})`, left: "25%", right: "18%", top: "18%", bottom: "18%",position: "center",backgroundRepeat: 'no-repeat', width: '47%', paddingBottom: '10%', height: '20%'}}>
                    <p style={{fontWeight: 'bold'}}>SPECIAL SIGNATURE CAKE</p>
                    <div>
                        <Button variant="primary" size="sm">
                            Small button
                        </Button>
                    </div>
                </Card>

                <Card style={{ width: '90%', marginTop: '5%', left: '5%', border: 'none' }}>
                    <Card.Header style={{border: 'none', background: 'white', fontSize: '2rem', fontWeight: 'bold'}}>Birthday Cake</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm="3">
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <Card.Img variant="top" src={Birthday_cake_chocolate} style={{height: '20rem', cursor: 'pointer'}} onClick={() => {this.changeURL("/Detail")}} />
                                    <Card.Body>
                                        <Card.Title><a href="/detail/1">Card Title</a></Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{backgroundColor: "#FFFFFF", border: 'none'}}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <Card.Img variant="top" src={Birthday_cake_custom} style={{height: '20rem'}} />
                                    <Card.Body>
                                    <Card.Title><a href="/detail/2">Card Title</a></Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{backgroundColor: "#FFFFFF", border: 'none'}}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <Card.Img variant="top" src={Birthday_cake_pink} style={{height: '20rem'}} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{backgroundColor: "#FFFFFF", border: 'none'}}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <Card.Img variant="top" src={Birthday_cake} style={{height: '20rem'}} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{backgroundColor: "#FFFFFF", border: 'none'}}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card style={{ width: '90%', marginTop: '5%', left: '5%', border: 'none' }}>
                    <Card.Header style={{border: 'none', background: 'white', fontSize: '2rem', fontWeight: 'bold'}}>Cup Cakes</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm="3">
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <Card.Img variant="top" src={Cupcakes_moist} style={{height: '20rem'}} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{backgroundColor: "#FFFFFF", border: 'none'}}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <Card.Img variant="top" src={Cupcakes_vanilla} style={{height: '20rem'}} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{backgroundColor: "#FFFFFF", border: 'none'}}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <Card.Img variant="top" src={Cupcakes_christmas} style={{height: '20rem'}} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{backgroundColor: "#FFFFFF", border: 'none'}}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <Card.Img variant="top" src={Cupcakes_chocholate} style={{height: '20rem'}} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{backgroundColor: "#FFFFFF", border: 'none'}}>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                </Container>
            <Footer  history={this.props.history} />
            </Router>
            </>
        )
    }
}

export default Catalog;