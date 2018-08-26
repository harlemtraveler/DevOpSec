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
  WelcomeSection,
  QuoteSection,
  QuoteButton } from '../components/StyledComponents'
import {
  ChartIcon,
  GearIcon,
  HandshakeIcon,
  MeterIcon,
  ShieldIcon,
  MenuIcon } from '../components/icons'


const IndexPage = ({ data }) => (
  <div>
    <HomePageContainer>
      <WelcomeSection>
          <Img
            className='lightbulb'
            style={{
              display: 'block',
              maxHeight: '50vh',
            }}
            sizes={data.ImacPinkScreen.sizes}
          />

        <div
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'auto'
          }}>
        <h1>Welcome</h1>
        <p>
          We understand that your business is more than a website. It's an idea, a passion,
          something that that world needs.You decided to take the initiative and make it a reality.
          DevOpSec's mission is to support your company, enable you to focus on innovation,
          while we provide the tools for it to grow, and scale flawlessly. We not only want you
          to succeed, but for your clients to be satisfied, enjoying the product or service your
          business brought to market.
          <br />
          ...all without the man-buns, hipster-stache, and gluten allergies.
        </p>

        </div>
      </WelcomeSection>

      <QuoteSection>
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
      </QuoteSection>

      <PageSection>
        <IconContainer>
          <ContentBlock>
            <a href="#"><ChartIcon /></a>
            <figcaption>
              <h4>Cost Optimization</h4>
              <p>
                Keeping your business cost under control
              </p>
            </figcaption>
          </ContentBlock>

          <ContentBlock>
            <a href="#"><GearIcon /></a>
            <figcaption>
              <h4>Operational Excellence</h4>
              <p>
                Keeping your business cost under control
              </p>
            </figcaption>
          </ContentBlock>

          <ContentBlock>
            <a href="#"><HandshakeIcon /></a>
            <figcaption>
              <h4>Reliability</h4>
              <p>
                Keeping your business cost under control
              </p>
            </figcaption>
          </ContentBlock>

          <ContentBlock>
            <a href="#"><MeterIcon /></a>
            <figcaption>
              <h4>Performance</h4>
              <p>
                Keeping your business cost under control
              </p>
            </figcaption>
          </ContentBlock>

          <ContentBlock>
            <a href="#"><ShieldIcon /></a>
            <figcaption>
              <h4>Security</h4>
              <p>
                Keeping your business cost under control
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

// Text in 2nd row overflows at 1032px
// Text under icons in 5th row overflows at 650px

/*
  Gradient style:

  style={{background: 'linear-gradient(to left, #F1F2B5, #135058)'}}
*/
