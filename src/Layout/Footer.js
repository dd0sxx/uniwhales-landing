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
  padding: 0 0 50px 0;
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
        :last-child {
            text-align: right;
            a:last-child {
                margin-top: 10px;
            }
        }
        
        ${palette.md} {
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
            :last-child {
            text-align: center;
            a:last-child {
                margin-top: 20px;
            }
        }
        }
    }

`;

const Disclaimer = styled.div`
  width: 100%;
  text-align: center;
  color: ${palette.gray};
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.9em;
  text-align: center;
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
                        <a className="footerlink" href="/#transactions">Transactions</a>
                        <a className="footerlink" href="/#access">Access Levels</a>
                        <a className="footerlink" href="/#token">Token</a>
                        <a className="footerlink" target="_blank" rel="noreferrer" href="https://www.coingecko.com/en/coins/uniwhales">CoinGecko</a>
                    </div>
                    <div className="linkcol">
                        <H3 inverse>Community</H3>
                        <a className="footerlink" href="https://twitter.com/uniwhalesio">Twitter</a>
                        <a className="footerlink" href="https://t.me/uniwhales">Telegram</a>
                        <a className="footerlink" href="https://uniwhales.medium.com/">Medium</a>
                        <a className="footerlink" href="mailto:info@uniwhales.io">Contact</a>
                    </div>
                    <div className="linkcol">
                        <Button href="https://app.uniwhales.io/" text="Launch App" />
                        <Button text="Get UWL" href="https://info.uniswap.org/pair/0x9d4b552c992ee3b863f3b51e95e46ecf38c21429" />
                    </div>
                </FooterCtn>
                <Disclaimer>$UWL is a utility token used to gain membership to the UniWhales analytics platform. Extreme changes in price may occur at any time, resulting in a potential loss of value, complete or partial loss of purchasing power, and difficulty or a complete inability to sell or exchange your digital currency. UniWhales shall be under no obligation to purchase or to broker the purchase back from you of your cryptocurrency in circumstances where there is no viable market for the purchase of the same. None of the content published on this site constitutes a recommendation that any particular cryptocurrency, portfolio of cryptocurrencies, transaction or investment strategy is suitable for any specific person. None of the information providers or their affiliates will advise you personally concerning the nature, potential, value or suitability of any particular cryptocurrency, portfolio of cryptocurrencies, transaction, investment strategy or other matter. The products and services presented on this website may only be purchased in jurisdictions in which their marketing and distribution are authorized.</Disclaimer>
                <Paragraph inverse>©2020 UniWhales.io All rights reserved</Paragraph>
            </Container>
		</Wrapper>
	)
}

export default Footer





