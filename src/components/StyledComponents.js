import React, { Component } from 'react';
import styled from 'styled-components'

export const IconContainer = styled.div`
  margin: 0;
  margin-top: 10vh;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const BannerText = styled.div`
  margin: 0;
  padding: 0;
  top: 30vh;
  font-family: Open Sans, sans-serif;
  text-align: center;
  position: relative;
  color: #fff;
  z-index: 2;
`;

export const HeaderWrapper = styled.div`
  background: #4f6272;
  marginBottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 60vh;
  color: #fff;
`;

export const HeaderContainer = styled.div`
  margin: 0 0;
  ${'' /* max-width: 1240px; */}
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

export const MainNav = styled.nav`
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

export const PageSection = styled.div`
  height: 50vh;
  width: 100%;
`;

export const ContentBlockContainer = styled.div`
  height: 40vh;
  width: 35vh;
  background: #fff;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const ContentBlock = styled.figure`
  box-sizing: border-box;
  text-align: center;
`;

export const QuoteButton = styled.a`
  text-decoration: none;
  border:2px solid;
  padding: 10px;
  font-size: 20px;
  background: transparent;
  color: #fd5200;
  font-family: Open Sans, sans-serif;
  font-weight: bold;
  &:hover {
    background: #fd5200;
    color: #000;
  }
`;
