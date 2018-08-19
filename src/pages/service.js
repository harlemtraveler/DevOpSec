import React, { Component } from 'react';
import Link from "gatsby-link";

const Service = ({ data }) => (
  <div>
    <h1>Services</h1>
    <p>Vaporware ipsum adaptogen freegan letterpress nostrud.
      Kinfolk dolore ut microdosing DIY tilde tumblr cred roof
      party locavore intelligentsia. Deserunt man bun craft beer,
      ui art party meggings ea meditation next level hot chicken kale
      chips hell of cardigan mixtape. Kickstarter farm-to-table portland
      echo park dreamcatcher. Ethical taxidermy ennui swag meditation
      jianbing chambray trust fund tilde
    </p>
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
  }
`
