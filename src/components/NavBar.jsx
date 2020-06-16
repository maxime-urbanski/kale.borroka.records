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
    { name: "LP/10", link: "/LP" },
    { name: "EP/CD", link: "/EP" },
    { name: "Production", link: "/Production" },
    { name: "Divers", link: "/Divers" },
];
function MenuNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar
                secondary
                expand="md"
                className="md-auto fixed-top style nav-pills shadow p-3 mb-5 bg-primary"
                width="100vw"
            >
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto " navbar>
                        {menu.map((item) => {
                            return (
                                <NavItem
                                    className="nav-justified text-white"
                                    key={item.name}
                                >
                                    <NavLink tag={Link} to={item.link}>
                                        {item.name}
                                    </NavLink>
                                </NavItem>
                            );
                        })}
                    </Nav>                    
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MenuNav;
