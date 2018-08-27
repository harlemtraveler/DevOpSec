import React, { Component } from 'react';
import styled from 'styled-components'
import './fonts.css'

// Reusable Styled Components
export const PageSection = styled.div`
  height: 50vh;
  max-width: 100vw;
`;

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

export const ButtonTemplate = styled.button`
  border:2px solid;
  padding: 5px;
  font-size: 20px;
  background: transparent;
  font-weight: bold;
`;

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

export const ImageSquare = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  height: 350px;
  width: 350px;
  &:hover {
    div {
      opacity: 0.5;
    }
    h3 {
      visibility: visible;
      opacity: 1;
      transition: all 0.5s ease-in;
    }
  }
  @media (max-width: 400px) {
    height: 250px;
    width: 250px;
    @media (max-width: 325px) {
      height: 200px;
      width: 200px;
    }
  }
`;

// Header Component Styled Components
export const BannerText = styled.div`
  margin: 0;
  padding: 0;
  top: 30vh;
  width: 50vw;
  font-family: 'Maven Pro', sans-serif;
  text-align: center;
  position: relative;
  color: #fff;
${'' /* Hides BannerText at 600px and below */}
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
    font-weight: 200;
    display: flex;
    margin: .70rem;
    @media (max-width: 550px) {
      font-size: 18px;
      margin-left: 0;
    }
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

// Home Page Styled Components
export const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr 1fr 1fr;
`;

export const WelcomeSection = PageSection.extend`
  ${'' /* background: linear-gradient(#ADA996, #F2F2F2, #DBDBDB, #EAEAEA); */}
  ${'' /* background: linear-gradient(#ECE9E6, #ffffff); */}
  ${'' /* background: linear-gradient(#F0F2F0, #000C40); */}
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

export const QuoteButton = ButtonTemplate.extend`
  text-decoration: none;
  padding: 5px 25px;
  border-radius: 5px;
  color: #000;
  &:hover {
    background: #d81e5b;
    color: #000;
  }
`;

// Service Page Styled Components
export const ServicePageContainer = styled.div`
  margin: 0;
  padding: 40px 0 0 0;
  display: grid;
  grid-gap: 20px;
  ${'' /* grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr; */}
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;

`;

export const HoverHeading = styled.h3`
  color: #000;
  font-weight: normal;
  visibility: hidden;
  opacity: 0;
`;
