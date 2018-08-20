import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import './neon.css'
import Logo from './Logo.js'
import styled from 'styled-components'
import Img from 'gatsby-image'
import OpenSans from 'gatsby-plugin-google-fonts'


const HeaderWrapper = styled.div`
  background: #4f6272;
  marginBottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 60vh;
  color: #fff;
`;

const HeaderContainer = styled.div`
  margin: 0 0;
  ${'' /* max-width: 1240px; */}
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: .70rem;
    li {
      margin: auto 15px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
          -moz-animation: neon2 1.5s ease-in-out infinite alternate;
          animation: neon2 1.5s ease-in-out infinite alternate;
        }
      }
    }
  }
`;

const BannerText = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  top: 35vh;
  float: right;
  font-family: Open Sans, sans-serif;
  text-align: center;
  color: #fff;
  z-index: 2;
`;

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
