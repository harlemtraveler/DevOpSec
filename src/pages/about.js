import React, { Component } from 'react';
import Img from 'gatsby-image'
import { AboutPageContainer } from '../components/StyledComponents'

const About = ({ data }) => (
  <AboutPageContainer>

    <h1 style={{ textAlign: 'center' }}>About Us</h1>
    <h3 style={{ textAlign: 'center' }}>
      We follow five basic principles when it comes to your application's environment.
    </h3>
    <br />
    <ul>
      <li>
        <h4>Cost Optimization</h4>
        <p>
          Everyone's needs are unique, but cost is a universal consideration.
          We will keep your wallet fat, while meeting the business's needs.
        </p>
        <hr />
      </li>
      <li>
        <h4>Reliability</h4>
        <p>
          When you gain a new customer you want to keep them satisfied.
          Hopefully, they'll recommend their peers to your solution. However,
          to keep them there, you need reliable service. If your web application
          crashes, a large majority of new users will not return. We'll make
          sure your environment is tuned for operational excellence.
        </p>
        <hr />
      </li>
      <li>
        <h4>Operational Excellence</h4>
        <p>
          We don't want your business to just run well, we wantit to be the best
          out there at what it does. We will review goals and plans of action to
          improve on current success and attract new customers. You have a great
          idea. We want to make sure the world knows.
        </p>
        <hr />
      </li>
      <li>
        <h4>Performance Efficiency</h4>
        <p>
          The potential flip side to having a highly reliable system is
          inefficient operations. We want to keep oyur service working at its
          highest capacity, but eliminate any redundancies or resources that
          aren't necessary for your unique situation.
        </p>
        <hr />
      </li>
      <li>
        <h4>Security</h4>
        <p>
          One of our biggest concerns is sxecurity. Money tends to be the
          primary concern of most users, but realize the devestating effects
          a poorly secured application can have. DevOpSec will ensure your
          application's environment is sealed tight and provide constant
          monitoring for any potential bad actors.
        </p>
      </li>
    </ul>
    {/* <Img style={{top: 0, left: 0}} sizes={ data.pineappleLaptop.sizes } /> */}
  </AboutPageContainer>
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
