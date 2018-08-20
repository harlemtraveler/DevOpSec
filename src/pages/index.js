import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BannerText = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  position: relative;
  color: #000;
  z-index: 2;
`;

const IndexPage = () => (
  <div>
    

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
