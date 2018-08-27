import React, { Component } from 'react';
import Img from 'gatsby-image'

const About = ({ data }) => (
  <div>

    <h1>About Us</h1>
    <p>Vaporware ipsum adaptogen freegan letterpress nostrud.
      Kinfolk dolore ut microdosing DIY tilde tumblr cred roof
      party locavore intelligentsia. Deserunt man bun craft beer,
      ui art party meggings ea meditation next level hot chicken kale
      chips hell of cardigan mixtape. Kickstarter farm-to-table portland
      echo park dreamcatcher. Ethical taxidermy ennui swag meditation
      jianbing chambray trust fund tilde
    </p>
    <Img style={{top: 0, left: 0}} sizes={ data.pineappleLaptop.sizes } />
  </div>
)




// class About extends Component {
//
//   render() {
//     return (
//       <div>
//         <Img style={{top: 0, left: 0}} sizes={ data.marketingServiceImage.sizes } />
//
//         <h1>About Us</h1>
//         <p>Vaporware ipsum adaptogen freegan letterpress nostrud.
//           Kinfolk dolore ut microdosing DIY tilde tumblr cred roof
//           party locavore intelligentsia. Deserunt man bun craft beer,
//           ui art party meggings ea meditation next level hot chicken kale
//           chips hell of cardigan mixtape. Kickstarter farm-to-table portland
//           echo park dreamcatcher. Ethical taxidermy ennui swag meditation
//           jianbing chambray trust fund tilde
//         </p>
//       </div>
//     );
//   }
//
// }

export default About;

export const query = graphql`
  query AboutQuery {
    pineappleLaptop: imageSharp(id: { regex: "/images/pineapple-laptop.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
