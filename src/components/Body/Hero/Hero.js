import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import { H1, Paragraph } from '../../Typography/Typography.js';
import Dashboard from '../../../assets/images/dashboard-image.png'
import Wave from '../../../assets/images/wave-background.png'
import Button from '../../Button/Button'

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

const Hero = () => {
    return (
        <>
        <HeroWrapper id="about">
            <Container>
                <InnerWrapper>
                    <TextSection>
                        <H1 inverse >Analyze the market movers on Uniswap</H1>
                        <Paragraph inverse marginBottom >Realtime whale data. Track large volume transactions and traders on Uniswap BEFORE everyone else knows what they are up to.</Paragraph>
                        <Button text="Join the Telegram Channel" href="https://t.me/uniwhales" />
                        <TelegramText>4,500+ members</TelegramText>
                    </TextSection>
                    <ImageSection>
                        <img src={Dashboard} alt="Uniwhales Dashboard" />
                    </ImageSection>
                </InnerWrapper>
            </Container>
        </HeroWrapper>
        <WaveSection>
            <img src={Wave} alt="Wave Pattern" />
        </WaveSection>
        </>
	)
}

export default Hero