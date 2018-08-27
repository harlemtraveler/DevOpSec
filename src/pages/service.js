import React, { Component } from 'react';
import Link from "gatsby-link";
import Img from 'gatsby-image'
import { ServicePageContainer, PageSection, ImageSquare } from '../components/StyledComponents'

const Service = ({ data }) => (
  <div>
    <ServicePageContainer>
      <ImageSquare>
        <Img
          style={{top: 0, left: 0, height: '100%', width: '100%' }}
          sizes={ data.devopsServiceImage.sizes }
        />
      </ImageSquare>
      <ImageSquare>
        <Img
          style={{top: 0, left: 0, height: '100%', width: '100%' }}
          sizes={ data.developerServiceImage.sizes }
        />
      </ImageSquare>
      <ImageSquare>
        <Img
          style={{top: 0, left: 0, height: '100%', width: '100%' }}
          sizes={ data.scriptingServiceImage.sizes }
        />
      </ImageSquare>
      <ImageSquare>
        <Img
          style={{top: 0, left: 0, height: '100%', width: '100%' }}
          sizes={ data.cloudServiceImage.sizes }
        />
      </ImageSquare>
      <ImageSquare>
        <Img
          style={{top: 0, left: 0, height: '100%', width: '100%' }}
          sizes={ data.securityServiceImage.sizes }
        />
      </ImageSquare>
      <ImageSquare>
        <Img
          style={{top: 0, left: 0, height: '100%', width: '100%' }}
          sizes={ data.marketingServiceImage.sizes }
        />
      </ImageSquare>

    </ServicePageContainer>
  </div>
);

export default Service;

export const query = graphql`
  query ServiceQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/images/rj45.jpeg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    devopsServiceImage: imageSharp(id: { regex: "/images/devops-service-image.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    developerServiceImage: imageSharp(id: { regex: "/images/developer-service-image.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    scriptingServiceImage: imageSharp(id: { regex: "/images/scripting-service-image.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    cloudServiceImage: imageSharp(id: { regex: "/images/cloud-service-image.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    securityServiceImage: imageSharp(id: { regex: "/images/security-service-image.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    marketingServiceImage: imageSharp(id: { regex: "/images/marketing-service-image.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`

/*
  Temporary Filler Content:

  <h1>Services</h1>
  <p>Vaporware ipsum adaptogen freegan letterpress nostrud.
    Kinfolk dolore ut microdosing DIY tilde tumblr cred roof
    party locavore intelligentsia. Deserunt man bun craft beer,
    ui art party meggings ea meditation next level hot chicken kale
    chips hell of cardigan mixtape. Kickstarter farm-to-table portland
    echo park dreamcatcher. Ethical taxidermy ennui swag meditation
    jianbing chambray trust fund tilde
</p>
*/
