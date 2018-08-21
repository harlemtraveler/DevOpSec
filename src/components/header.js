import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import './neon.css'
import Logo from './icons/Logo.js'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Robot from 'gatsby-plugin-google-fonts'
import { BannerText,
  HeaderWrapper,
  HeaderContainer,
  MainNav } from './StyledComponents'

class Header extends Component {

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

    return (
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
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
            <h2>
              Architecting, Building, and Securing your
              business allowing you to focus on Innovation.
            </h2>
          </BannerText>

          <MainNav
            style={
              location.pathname === '/service/' ? {fontColor: '#FF1177'} : {fontColor: '#fff'}
            }
          >
            <ul>
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
