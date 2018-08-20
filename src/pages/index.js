import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { BannerText,
  IconContainer,
  PageSection,
  ContentBlockContainer,
  ContentBlock,
  QuoteButton } from '../components/StyledComponents'
import {
  ChartIcon,
  GearIcon,
  HandshakeIcon,
  MeterIcon,
  ShieldIcon } from '../components/icons'



const IndexPage = ({ data }) => (
  <div>
    <PageSection style={{background: '#fff', textAlign: 'center'}}>
      <h1>Hello from DevOpSec!</h1>
      <p>The website is still under construction.
        <br />
        However, we wanted to get it up and running
        <br />
        to begin helping wherever possible.</p>
    </PageSection>

    <PageSection style={{position: 'relative'}}>
      <Img
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
          zIndex: '-1'
        }}
        sizes={data.PageSectionImage.sizes}
      />
        <div style={{textAlign: 'center', paddingTop: '10vh'}}>
          <h1>Contact us for a quote</h1>
          <p>Learn how we can help scale your business.</p>
          <QuoteButton href="#">Quote</QuoteButton>
        </div>
    </PageSection>

    <PageSection style={{background: '#fff'}}>
      <IconContainer>
        <ContentBlock>
          <a href="#"><ChartIcon /></a>
          <figcaption>
            <h4>Cost Optimization</h4>
            <p>
              Keeping your business
              <br />
              cost under control
            </p>
          </figcaption>
        </ContentBlock>

        <ContentBlock>
          <a href="#"><GearIcon /></a>
          <figcaption>
            <h4>Operational Excellence</h4>
            <p>
              Keeping your business
              <br />
              cost under control
            </p>
          </figcaption>
        </ContentBlock>

        <ContentBlock>
          <a href="#"><HandshakeIcon /></a>
          <figcaption>
            <h4>Reliability</h4>
            <p>
              Keeping your business
              <br />
              cost under control
            </p>
          </figcaption>
        </ContentBlock>

        <ContentBlock>
          <a href="#"><MeterIcon /></a>
          <figcaption>
            <h4>Performance Efficiency</h4>
            <p>
              Keeping your business
              <br />
              cost under control
            </p>
          </figcaption>
        </ContentBlock>

        <ContentBlock>
          <a href="#"><ShieldIcon /></a>
          <figcaption>
            <h4>Security</h4>
            <p>
              Keeping your business
              <br />
              cost under control
            </p>
          </figcaption>
        </ContentBlock>

      </IconContainer>
    </PageSection>

  </div>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    PageSectionImage: imageSharp(id: { regex: "/images/phone-grasp-pic.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`

// #969696
// <Link to="/page-2/">Go to page 2</Link>

/*
  Code for background video (Two dif ways)
  <video
    autoPlay
    loop
    muted
    style={{height: '100%', width: '100%'}}
    src={'https://www.youtube.com/embed/A9abHX_NSK4'}
    type={'video/mp4'}></video>

  <iframe
    width={'100%'}
    height={"100%"}
    src="https://www.youtube.com/embed/A9abHX_NSK4"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen></iframe>
*/
