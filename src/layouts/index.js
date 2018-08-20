import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        // margin: '0 auto',
        // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        margin: 0,
        padding: 0,
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/images/fiber-optic.jpeg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    backgroundHeight: imageSharp {
      id resolutions {
        height
      }
    }
    PageSectionImage: imageSharp(id: { regex: "/images/phone-grasp-pic.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    headerImage: imageSharp(id: { regex: "/images/rj45.jpeg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`
