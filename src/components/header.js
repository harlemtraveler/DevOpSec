import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Logo from './Logo.js'
import styled from 'styled-components'
import Img from 'gatsby-image'


const HeaderWrapper = styled.div`
  ${'' /* background: #524763; */}
  marginBottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;
`;

const HeaderContainer = styled.div`
  margin: 0 0;
  max-width: 1240px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;


class Header extends Component {

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Logo />
            </Link>
          </h1>
        </HeaderContainer>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            // opacity: 0.3
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    );
  }

}

export default Header;

// const Header = ({ siteTitle }) => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </div>
// )
