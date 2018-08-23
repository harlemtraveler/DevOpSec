import React, { Component, Fragment } from 'react';
import Link from 'gatsby-link'
import { MainNav } from './StyledComponents'
import { MenuIcon } from './icons'
import { Style } from 'react-style-tag'
import Roboto from 'gatsby-plugin-google-fonts'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'


class MobileNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="nav-menu" expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <MenuIcon />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu" right>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/service/"}>Services</Link>
                  <Link to={"/about/"}>About</Link>
                  <Link to={"/contact"}>Contact</Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <Style>{`
            .nav-menu a {
              text-decoration: none;
              color: #000;
              &:hover {
                -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
                -moz-animation: neon2 1.5s ease-in-out infinite alternate;
                animation: neon2 1.5s ease-in-out infinite alternate;
              }
            }
            .dropdown-menu {
              display: flex;
              flex-direction: column;
              align-items: end;
              background: transparent;
              border: none;
              a {
                color: #fff;
              }
            }
          `}</Style>
        </Navbar>
      </div>
    );
  }
}

Navbar.PropTypes = {
  glowWhite: MainNav
}
//
// NavbarToggler.PropTypes = {
//   color: <Style>{`
//     color: #fff;
//   `}</Style>
// }

export default MobileNav;
