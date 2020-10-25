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

const menu = [
  { name: "home", link: "/" },
  { name: "prod", link: "/Production" },
  { name: "divers", link: "/Divers" },
];
const shop = [
  { name: "LP", link: "/LP" },
  { name: "EP", link: "/EP" },
  { name: "CD", link: "/CD" },
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
            {menu.map((item) => {
              return (
                <>
                  <NavItem className="nav-justified hvr-grow" key={item.name}>
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
              <DropdownMenu left>
                {shop.map((i) => {
                  return (
                    <DropdownItem>
                      <Link to={i.link}>
                        <h6 className="hvr-grow">{i.name}</h6>
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
