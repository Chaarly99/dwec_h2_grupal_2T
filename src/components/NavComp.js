import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

export const NavComp = () => {
    return (
        <div>
            {
                sessionStorage.getItem('user') != null ? (
                    <>
                        <Navbar bg="dark" expand="lg" variant="dark">
                            <Container>
                                <Navbar.Brand href="#home">FullCar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/">Inicio</Nav.Link>
                                        <NavDropdown title={'Bienvenido ' + sessionStorage.getItem('user')} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#" onClick={cerrarSesion}>Cerrar sesión</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </>
                ) : (<Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">FullCar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/registro">Regístrese para acceder</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>)
            }


        </div>
    )

    function cerrarSesion(){
        sessionStorage.removeItem('user');
        alert('Sesión cerrada');
        window.location.href='/';
    }
}
