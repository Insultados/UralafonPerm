import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import classes from './Header.module.css'

const Header = () => {


    useEffect( () => {
        const currentUrl = window.location.pathname.slice(1);
        console.log(currentUrl)
        if (currentUrl !== 'trebi' && currentUrl !== 'donations' && currentUrl !== '')
            document.querySelector('#'+currentUrl).style.color = 'white'
        else if (currentUrl === 'trebi' || currentUrl === 'donations') {
            document.querySelector('#ddown').style.color = 'white'
        }
        else {
            document.querySelector('#main').style.color = 'white'
        }
    })
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark"
                style={{
                    backgroundColor: "rgb(56, 56, 56)",
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <div href="/" className={classes.header_logo}>
                    <p className={classes.header_logo_text}>Белогорский монастырь</p>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link id={'main'} eventKey="1" href="/">Новости</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id={'about'} eventKey="2" href="/about">История</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id={'schedule'} eventKey="3" href="/schedule">Расписание</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id={'office'} eventKey="4" href="/office">Подворье</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id={'FAQ'} eventKey="5" href="/FAQ">Вопросы</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown menuVariant="dark" id="ddown" title="Пожертвования" >
                                <Container style={{textAlign:'center'}}>
                                    <NavDropdown.Item style={{color:'white', fontSize:'22px'}} id={'trebi'} href="/trebi">
                                        Требы
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item style={{color:'white', fontSize:'22px'}} id={'donations'} href="/donations">
                                        Реквизиты
                                    </NavDropdown.Item>
                                </Container>
                            </NavDropdown>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
}

export default Header;