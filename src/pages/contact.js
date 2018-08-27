import React, { Component } from 'react';
import { IconContainer, ContentBlock, PageSection } from '../components/StyledComponents'
import { MailIcon, LinkedInIcon, GithubIcon} from '../components/icons'

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
          jianbing chambray trust fund tilde.
          <br />
          <br />
          Lorem ipsum dolor amet gochujang copper mug before they sold out,
          austin freegan kogi biodiesel scenester meh iceland +1 authentic
          squid master cleanse brunch. Chicharrones single-origin coffee vinyl
          church-key disrupt, austin meggings gluten-free waistcoat tousled
          seitan pickled pok pok subway tile VHS. La croix normcore messenger
          bag, tousled viral taiyaki ugh twee fixie. Portland forage chambray
          pickled. Gochujang echo park PBR&B blog irony, pabst neutra man bun
          keffiyeh asymmetrical.
          <br />
          <br />
          Distillery meditation raclette swag, jianbing cliche literally man
          bun brunch vape echo park four loko. Gluten-free tattooed synth
          schlitz vape XOXO skateboard, echo park fingerstache. 90's master
          cleanse blue bottle, banjo williamsburg chicharrones crucifix.
          Actually photo booth poutine humblebrag plaid 8-bit ramps kinfolk
          yr. Banh mi umami swag four dollar toast letterpress. Portland
          enamel pin tattooed, scenester vaporware direct trade live-edge
          la croix. Vaporware pabst venmo vexillologist post-ironic aesthetic
          retro truffaut kombucha you probably haven't heard of them bushwick
          intelligentsia craft beer forage gentrify.
        </p>

        {/* <hr style={{display: 'block', background: '#000', border: '1px solid #000', marginTop: '30px'}} /> */}

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
