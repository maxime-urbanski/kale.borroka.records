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
import { withNamespaces } from "react-i18next";

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
                expand="md"
                className={`${styles.navHeight} fixed-top bg-primary mb-5`}
            >
                <NavbarToggler
                    onClick={toggle}
                    color="success"
                    className={styles.col}
                />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        {menu.map((item) => {
                            return (
                                <>
                                    <NavItem
                                        className="nav-justified hvr-grow"
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

export default withNamespaces()(MenuNav);
