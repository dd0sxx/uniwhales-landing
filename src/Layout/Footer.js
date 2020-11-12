import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container/Container.js'
import * as palette from '../palette.js';
import { H3, Paragraph } from '../components/Typography/Typography.js';
import Button from '../components/Button/Button'


const Wrapper = styled.div`
  width: 100%;
  background-color: ${palette.dark_blue};
  padding: 60px 0 30px; 
  text-align: center;

  p {
      font-size: 14px;
      max-width: 700px;
      display: inline-block;
      color: ${palette.dark_gray};
  }
`;

const FooterCtn = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0 0 150px 0;
  ${palette.md} {
    flex-direction: column;
    }
  
    .linkcol {
        text-align: left;
        width: 33.333%;
        h3 {
            font-size: 18px;
            margin-bottom: 15px;
        }
        .footerlink {
            display: inline-block;
            width: 100%;
            color: ${palette.gray};
            margin-bottom: 6px;
            transition: all 200ms ease-in-out;
            :hover {
                text-decoration: none;
                color: ${palette.white};
            }
        }
        
        ${palette.md} {
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
        }
    }

`;

const Footer = () => {
	
	return (
		<Wrapper>
            <Container>
                <FooterCtn>
                    <div className="linkcol">
                        <H3 inverse>Uniwhales.io</H3>
                    </div>
                    <div className="linkcol">
                        <H3 inverse>About</H3>
                        <a className="footerlink" href="/#features">Features</a>
                        <a className="footerlink" href="/#access">Access Levels</a>
                        <a className="footerlink" href="/#token">Token</a>
                        <a className="footerlink" href="/legal">Legal</a>
                    </div>
                    <div className="linkcol">
                        <H3 inverse>Community</H3>
                        <a className="footerlink" href="https://twitter.com/uniwhalesio">Twitter</a>
                        <a className="footerlink" href="https://t.me/uniwhales">Telegram</a>
                        <a className="footerlink" href="https://uniwhales.medium.com/">Medium</a>
                        <a className="footerlink" href="mailto:info@uniwhales.io">Contact</a>
                    </div>
                    <div className="linkcol">
                        <Button text="Launch App" href="#" />
                    </div>
                </FooterCtn>
                <Paragraph inverse>©2020 UniWhales.io All rights reserved</Paragraph>
            </Container>
		</Wrapper>
	)
}

export default Footer





