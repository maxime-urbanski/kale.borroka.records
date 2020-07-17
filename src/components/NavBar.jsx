import React, { useState } from "react";
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

const menu = [
    { name: "Actu", link: "/" },
    { name: "Production", link: "/Production" },
    { name: "Divers", link: "/Divers" },
];
const shop = [
    { name: "LP", link: "/LP" },
    { name: "EP", link: "/EP" },
    { name: "CD", link: "/CD" },
];
function MenuNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar
                secondary
                expand="md"
                className={`${styles.navHeight} fixed-top shadow p-3 bg-primary`}
            >
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto " navbar>
                        {menu.map((item) => {
                            return (
                                <>
                                    <NavItem
                                        className="nav-justified text-white hvr-grow"
                                        key={item.name}
                                    >
                                        <NavLink
                                            tag={Link}
                                            to={item.link}
                                            className={`${styles.linkNav}`}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </NavItem>
                                </>
                            );
                        })}
                        <UncontrolledDropdown nav inNavbar className="hvr-grow">
                            <DropdownToggle
                                className={`${styles.linkNav}`}
                                nav
                                caret
                            >
                                Music Shop
                            </DropdownToggle>
                            <DropdownMenu left>
                                {shop.map((i) => {
                                    return (
                                        <DropdownItem>
                                            <Link to={i.link}>
                                                <h6 className="hvr-grow">
                                                    {i.name}
                                                </h6>
                                            </Link>
                                        </DropdownItem>
                                    );
                                })}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MenuNav;
