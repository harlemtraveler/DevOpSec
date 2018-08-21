import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { BannerText,
  IconContainer,
  PageSection,
  ContentBlockContainer,
  ContentBlock,
  ImageSquare,
  HomePageContainer,
  QuoteButton } from '../components/StyledComponents'
import {
  ChartIcon,
  GearIcon,
  HandshakeIcon,
  MeterIcon,
  ShieldIcon } from '../components/icons'



const IndexPage = ({ data }) => (
  <div>
    <HomePageContainer>
      <PageSection
        style={{
          background: '#fff',
          textAlign: 'center',
          display: 'flex',
          alignContent: 'start'
          // justifyContent: 'space-around'
        }}>
        <ImageSquare style={{paddingTop: '5vh'}}>
          <Img
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            sizes={data.ImacPinkScreen.sizes}
          />
        </ImageSquare>
        <div style={{paddingTop: '5vh'}}>
        <h1>Welcome</h1>
        <p>
          We understand that your business is more than a website. It's an idea, a passion,
          <br />
          something that that world needs.You decided to take the initiative and make it a reality.
          <br />
          DevOpSec's mission is to support your company, enable you to focus on innovation,
          <br />
          while we provide the tools for it to grow, and scale flawlessly. We not only want you
          <br />
          to succeed, but for your clients to be satisfied, enjoying the product or service your
          <br />
          business brought to market.
          <br />
          <br />
          ...all without the man-buns, hipster-stache, and gluten allergies.

        </p>
        </div>
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
            <p>Learn how we can help scale your business with a free consultation.</p>
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

    </HomePageContainer>
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
    ImacPinkScreen: imageSharp(id: { regex: "/images/lightbulb.jpg/" }) {
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
