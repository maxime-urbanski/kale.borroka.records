import React, { useState } from "react";
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

import "./menu.css";

const menu = [
    { name: "Actu", link: "/" },
    { name: "LP/10", link: "/lp" },
    { name: "EP/CD", link: "/ep" },
    { name: "Production", link: "/production" },
    { name: "Divers", link: "/divers" },
];
function MenuNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar
                color="light"
                light
                expand="md"
                className=" mx-auto fixed-top style"
            >
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto " navbar>
                        {menu.map((item) => {
                            return (
                                <NavItem key={item.name}>
                                    <NavLink tag={Link} to={item.link}>
                                        {item.name}
                                    </NavLink>
                                </NavItem>
                            );
                        })}
                    </Nav>
                    <NavbarText>Kale Borroka Records</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MenuNav;
