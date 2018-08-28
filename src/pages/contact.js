import React, { Component } from 'react';
import { IconContainer, ContentBlock, PageSection } from '../components/StyledComponents'
import { MailIcon, LinkedInIcon, GithubIcon} from '../components/icons'

class Contact extends Component {

  render() {
    return (
      <div>
        {/* <hr style={{display: 'block', background: '#000', border: '1px solid #000', marginTop: '30px'}} /> */}

          <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>
            Reach out!
          </h1>

        <IconContainer>
          <ContentBlock>
            <a href=""><MailIcon /></a>
            <figcaption>
              <h4 style={{paddingTop: '10px'}}>Email</h4>
              <p>Shoot us an email</p>
            </figcaption>
          </ContentBlock>

          <ContentBlock>
            <a href="https://github.com/harlemtraveler"><GithubIcon /></a>
            <figcaption>
              <h4 style={{paddingTop: '10px'}}>Github</h4>
              <p>Check out some of our Projects...Work and fun</p>
            </figcaption>
          </ContentBlock>

          <ContentBlock>
            <a href="https://www.linkedin.com/in/timothykeaveny"><LinkedInIcon /></a>
            <figcaption>
              <h4 style={{paddingTop: '10px', paddingRight: '10px'}}>LinkedIn</h4>
              <p>Connect with LinkedIn</p>
            </figcaption>
          </ContentBlock>
        </IconContainer>
      </div>
    );
  }

}

export default Contact;
