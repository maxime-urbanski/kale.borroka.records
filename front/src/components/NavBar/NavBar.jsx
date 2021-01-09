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
import styles from "../Styles/navbar.module.css";
import SearchBar from "./SearchBar";

const menu = [
  { name: "home", link: "/" },
  { name: "prod", link: "/production" },
];
const shop = [
  { name: "LP", link: "/lp" },
  { name: "EP", link: "/ep" },
  { name: "CD", link: "/cd" },
  { name: "Fanzine", link: "/fanzine" },
];
function MenuNav({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.navigate}>
      <Navbar
        dark
        expand="md"
        className={`${styles.navHeight} fixed-top bg-primary mb-5`}
      >
        <NavbarToggler onClick={toggle} className={styles.navCollapse} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {menu.map((item, index) => {
              return (
                <>
                  <NavItem className="nav-justified hvr-grow" key={index * 20}>
                    <NavLink
                      tag={Link}
                      to={item.link}
                      className={styles.linkNav}
                    >
                      {t(`${item.name}`)}
                    </NavLink>
                  </NavItem>
                </>
              );
            })}
            <UncontrolledDropdown nav inNavbar className="hvr-grow">
              <DropdownToggle className={styles.linkNav} nav caret>
                {t("shop")}
              </DropdownToggle>
              <DropdownMenu>
                {shop.map((item, index) => {
                  return (
                    <Link to={item.link}>
                      <DropdownItem key={index}>
                        <h6 className="hvr-grow">{item.name}</h6>
                      </DropdownItem>
                    </Link>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className={styles.searchContainer}>
            <div className={styles.searchContainer}>
              <SearchBar />
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withNamespaces()(MenuNav);
