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
`;

const WaveSection = styled.div`
  background: ${palette.dark_blue};
  width: 100%;
  padding: 0;
  img {
      width: 100%;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const TextSection = styled.div`
  width: 50%;
`;

const ImageSection = styled.div`
  width: 50%;
  padding-left: 40px;
  img {
      width: 100%;
  }
`;

const Hero = () => {
    return (
        <>
        <HeroWrapper>
            <Container>
                <InnerWrapper>
                    <TextSection>
                        <H1 inverse >High volume Uniswap trades at a glance</H1>
                        <Paragraph inverse marginBottom >Uniwhales helps you track large volume transactions on Uniswap. See pumps, dumps, and interesting whale moves in real-time giving you a critical trading edge in this fast moving marketplace.</Paragraph>
                        <Button text="Start Whale Watching" href="https://app.uniwhales.io/" />
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