import React, { Component } from 'react';
import { MainNav } from '../StyledComponents'
import Link from 'gatsby-link'
import './Menu.css'
import HeaderNav from './HeaderNav'

class Menu extends Component {

  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}>
        <HeaderNav />
      </div>
    );
  }

}

export default Menu;
