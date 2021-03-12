import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import { H1, Paragraph } from '../../Typography/Typography.js';
import Dashboard from '../../../assets/images/dashboard-image.png'
import Wave from '../../../assets/images/wave-background.png'
import Button from '../../Button/Button'
import Coindesk from '../../../assets/images/coindesk-logo.svg'
import Decrypt from '../../../assets/images/decrypt-logo.png'

const HeroWrapper = styled.div`
  background: ${palette.dark_blue};
  margin-top: 90px;
  width: 100%;
  padding: 100px 0 0 0;
  ${palette.md} {
    padding: 30px 0 0 0;
    text-align: center;

    p {
      margin-bottom: 30px;
    }
    }
`;

const WaveSection = styled.div`
  background: ${palette.dark_blue};
  width: 100%;
  padding: 0;
  img {
      width: 100%;
        ${palette.md} {
        width: 1000px;
        }
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
    ${palette.md} {
      flex-direction: column;
      }
`;

const TextSection = styled.div`
  width: 50%;
  ${palette.md} {
    width: 100%;
    }
`;

const TelegramText = styled.div`
  color: ${palette.gray};
  margin-left: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  ${palette.md} {
    width: 100%;
    margin-left: 0px;
    margin-top: 10px;
    }
`;

const ImageSection = styled.div`
  width: 50%;
  padding-left: 40px;
  ${palette.md} {
    width: 100%;
    padding-left: 0px;
    margin-top: 40px;
    }
  img {
      width: 100%;
  }
`;

const FeaturedCtn = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;

  h3 {
    text-align: center;
    color: #fff;
    font-size: 18px;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
 
  }

  a {
    width: 50%;
    text-align: center;
  }

  img {
    width: 200px;
    opacity: 0.6;
    ${palette.md} {
      width: 100%;
      padding: 0 20px;
    }
  }
`;

const Hero = () => {
    return (
        <>
        <HeroWrapper id="about">
            <Container>
                <InnerWrapper>
                    <TextSection>
                        <H1 inverse >Lower your DeFi brain fatigue</H1>
                        <Paragraph inverse marginBottom >We curate whale data. Tracking on Uniswap, SushiSwap, and 1inch. First class  (DAO). Join our free channels for a preview👇 👇</Paragraph>
                        <Button text="Join UniWhales (Free)" href="https://t.me/uniwhales" target="_blank"/>
                        <TelegramText>7800+ members</TelegramText>
                        <H1 inverse></H1>
                        <Button text="Join SushiWhales (Free)" href="https://t.me/sushiwhale" target="_blank"/>
                        <TelegramText>850+ members</TelegramText>
                    </TextSection>
                    <ImageSection>
                        <img src={Dashboard} alt="Uniwhales Dashboard" />
                    </ImageSection>
                </InnerWrapper>
                <FeaturedCtn>
                  <h3>Featured in:</h3>
                  <div>
                  <a href="https://www.coindesk.com/if-whales-move-the-market-uniwhales-is-the-whale-whisperer" target="_blank" rel="noreferrer">
                    <img src={Coindesk} alt="coindesk" />
                  </a>
                  <a href="https://decrypt.co/50209/this-app-tracks-whale-moves-on-ethereum-based-uniswap" target="_blank" rel="noreferrer">
                    <img src={Decrypt} alt="Decrypt" />
                  </a>
                  </div>
                </FeaturedCtn>
            </Container>
        </HeroWrapper>
        <WaveSection>
            <img src={Wave} alt="Wave Pattern" />
        </WaveSection>
        </>
	)
}

export default Hero