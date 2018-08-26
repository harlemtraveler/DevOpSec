import React, { Component } from 'react';
import styled from 'styled-components'
import Roboto from 'gatsby-plugin-google-fonts'


export const IconContainer = styled.div`
  margin: 0;
  margin-top: 10vh;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  align-content: center;
  align-items: start;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(182px, 1fr));
`;

export const BannerText = styled.div`
  margin: 0;
  padding: 0;
  top: 30vh;
  width: 50vw;
  text-align: center;
  position: relative;
  color: #fff;
${'' /* Hides BannerText at 900px and below */}
  @media (max-width: 600px){
    width: 0;
    height: 0;
    max-height: 0;
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
  background: #4f6272;
  overflow: hidden;
  position: relative;
  height: 60vh;
  width: 100vw;
  color: #fff;
`;

export const HeaderContainer = styled.div`
  margin: 0 0;
  width: 100%;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  align-items: start;
  ${'' /* justify-items: space-between; */}
  @media (max-width: 400px) {
    grid-template-rows: repeat(auto-fit, minmax(125px, 1fr));
    .menu-container {
      order: 1;
    }
    .logo-container {
      order: 2;
    }
  }
`;

export const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: .70rem;
  ${'' /* The two properties below hide the menu items */}
    ${'' /* max-height: 0;
    transform: rotateX(90deg); */}
    li {
      margin: 15px;
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

export const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr 1fr 1fr;
`;

export const PageSection = styled.div`
  height: 50vh;
  max-width: 100vw;
`;

export const WelcomeSection = PageSection.extend`
  background: #fff;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(182px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(182px, 1fr));
  ${'' /* @media (max-width: 1032px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  } */}
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    font-size: 6px;
    display: flex;
  }
  Img {
    @media (max-width: 650px) {
      width: 0;
      height: 0;
      max-height: 0;
      display: none;
    }
  }
`;

export const QuoteSection = PageSection.extend`
  position: relative;
  div p {
    @media (max-width: 650px) {
      width: 0;
      font-size: 0;
    }
  }
`;
// 340px
export const ContentBlock = styled.figure`
  text-align: center;
  max-width: 200px;
  p {
    @media (max-width: 650px) {
      width: 0;
      font-size: 0;
    }
  }
`;
// Within ContentBlock, text wrapped in <p> is unresponsive at 650 and below

export const ImageSquare = styled.div`
  border: 1px solid black;
`;

export const ButtonTemplate = styled.button`
  border:2px solid;
  padding: 5px;
  font-size: 20px;
  background: transparent;
  font-weight: bold;
`;

export const QuoteButton = ButtonTemplate.extend`
  text-decoration: none;
  padding: 5px 10px;
  color: #000;
  &:hover {
    background: #dd7373;
    color: #000;
  }
`;
