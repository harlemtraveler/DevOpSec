import React, { Component } from 'react';
import { MenuIcon } from '../icons'


class MenuButton extends Component {

  render() {
    return (
      <button
        id="menuButton"
        onMouseDown={this.props.handleMouseDown}
        style={{
          background: 'transparent',
          border: 'none',
          margin: 0,
          padding: 0,
          top: 0,
          right: 0,
          height: '50px',
          width: '50px',
          placeSelf: 'start end',
          order: 1
        }}>
        <MenuIcon />
      </button>
    );
  }

}

export default MenuButton;
