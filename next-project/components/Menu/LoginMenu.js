import React, {useState} from "react";
import styles from "./menu.module.scss";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class LoginMenu extends React.Component{
    render() {

        return (
            <div className={[styles.login].join(" ")}>
                <Navbar expand="lg" className="justify-content-between container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/login">login</Nav.Link>
                            <Nav.Link href="/register">create account</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }


};

export default LoginMenu;
