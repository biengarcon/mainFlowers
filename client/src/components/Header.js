import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Header() {
    return (
        <>
            <Navbar className='nav-bar'  variant="light">
                <Container>
                    <Col xs={6} md={4}>
                        <Image className='logo' src="https://i.ibb.co/68VG2vm/logo.jpg" rounded />
                    </Col>
                </Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <NavDropdown title="Наши Работы" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Nav.Link href="/">
                                    Авторские букеты
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <Nav.Link href="/">
                                Композиции в коробке
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link href="/">
                                    Моно-букеты
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Nav.Link href="/">
                                Свадебные букеты
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link href="/">
                                Композиция с фруктами
                                </Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#contacts">
                            Контакты
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}


export default Header;