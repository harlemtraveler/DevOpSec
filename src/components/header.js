import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import MediaQuery from 'react-responsive';
import MavenPro from 'gatsby-plugin-google-fonts'
import './neon.css'
import './fonts.css'
import { Logo, MenuIcon } from './icons'
import MenuButton from './Menu/MenuButton'
import Menu from './Menu/Menu'
import HeaderNav from './Menu/HeaderNav'
import MobileNav from './Menu/MobileNav'
import { BannerText,
  HeaderWrapper,
  HeaderContainer,
  MainNav } from './StyledComponents'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleClick(e) {
    this.toggleMenu();

    console.log("clicked");
    console.log(this.state.visible);
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  componentDidUpdate(prevProps, prevState) {

    const { data, location } = this.props;
    const imgHeight = this.wrapper.clientHeight;
    const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    // console.log(Math.round(0.7 * viewPortHeight));

    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/' || this.props.location.pathname === '/service' ) {
        if (imgHeight < Math.round(0.6 * viewPortHeight)) {
          this.wrapper.animate([{ height: '20vh' }, { height: '60vh' }], {
            duration: 300,
            fill: 'forwards',
            easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1
          });
        }
      }
        else {
          if (imgHeight > Math.round(0.2 * viewPortHeight)) {
            this.wrapper.animate([{ height: '60vh' }, { height: '20vh' }],{
              duration: 300,
              fill: 'forwards',
              easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
              iterations: 1
            });
          }
      }
    }
  }

  render() {
    const { data, location } = this.props;
    const toggle = this.toggle;
    return (
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
        <HeaderContainer>

          <h1 className="logo-container" style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Logo />
            </Link>
          </h1>

          <BannerText>
            <h2 style={{fontWeight: 'normal', fontSize: '2em', fontFamily: 'Open Sans'}}>
              Architecting, Building, and Securing your
              business allowing you to focus on Innovation.
            </h2>
          </BannerText>
          <MenuButton className="menu-container" handleClick={this.handleClick} />
          <Menu
            handleClick={this.handleClick}
            menuVisibility={this.state.visible} />

        </HeaderContainer>

        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0.5
          }}
          sizes={
            location.pathname === "/service" ? data.headerImage.sizes : data.background.sizes
          }
        />
      </HeaderWrapper>
    );
  }

}

export default Header;

/*

  style={
    location.pathname === '/service/' ? {fontColor: '#FF1177'} : {fontColor: '#fff'}
  }

*/

/*
  Media queries using the 'react-responsive' plugin

  <MediaQuery query="(min-device-width: 1224px)">
    <HeaderNav />
  </MediaQuery>
  <MediaQuery query="(max-device-width: 1224px)">
    <MobileNav />
  </MediaQuery>
*/
