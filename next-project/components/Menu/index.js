import React, {useState} from "react";
import styles from "./menu.module.scss";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from "next/image";
import Logo from "./../../public/img/logo.png";

class Menu extends React.Component{
    render() {

        return (
            <div className={["container p-0", styles.menu].join(" ")}>
                <Navbar expand="lg" className="justify-content-between">
                    <Navbar.Brand href="#home">
                        <Image
                            width={195}
                            height={60}
                            src = {Logo}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {/*<NavDropdown title="shop" id="basic-nav-dropdown">*/}
                            {/*    /!*<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*!/*/}
                            {/*    /!*<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*!/*/}
                            {/*    /!*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*!/*/}
                            {/*    /!*<NavDropdown.Divider />*!/*/}
                            {/*    /!*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*!/*/}
                            {/*</NavDropdown>*/}
                            <Nav.Link href="/shop">shop</Nav.Link>
                            <Nav.Link href="/my-boyfriends-back">My boyfriend back</Nav.Link>
                            <Nav.Link href="/staff-edit">staff edit</Nav.Link>
                            <Nav.Link href="/contact-us">contact</Nav.Link>
                            <Nav.Link href="/">cart</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }


};

export default Menu;
