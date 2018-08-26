import React, { Component } from 'react';
import Link from 'gatsby-link'
import { MainNav } from '../StyledComponents'
import { MenuIcon } from '../icons'
import './Menu.css'


class HeaderNav extends Component {

  render() {
    return (
      <MainNav>
        <ul style={{display: 'flex', flexDirection: 'column'}}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/service"}>Services</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </MainNav>
    );
  }

}

export default HeaderNav;
