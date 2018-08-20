import React, { Component } from 'react';
import styled from 'styled-components'
import MailIcon from '../components/MailIcon'
import LinkedInIcon from '../components/LinkedInIcon'
import GithubIcon from '../components/GithubIcon'

const IconContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

class Contact extends Component {

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>Vaporware ipsum adaptogen freegan letterpress nostrud.
          Kinfolk dolore ut microdosing DIY tilde tumblr cred roof
          party locavore intelligentsia. Deserunt man bun craft beer,
          ui art party meggings ea meditation next level hot chicken kale
          chips hell of cardigan mixtape. Kickstarter farm-to-table portland
          echo park dreamcatcher. Ethical taxidermy ennui swag meditation
          jianbing chambray trust fund tilde
        </p>
        <IconContainer>
          <a href=""><MailIcon /></a>
          <a href="https://github.com/harlemtraveler"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/timothykeaveny"><LinkedInIcon /></a>
        </IconContainer>
      </div>
    );
  }

}

export default Contact;
