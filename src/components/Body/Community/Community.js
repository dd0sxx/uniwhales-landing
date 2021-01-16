import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import { H2, Paragraph } from '../../Typography/Typography.js';
import Dashboard from '../../../assets/images/community.png'

const HeroWrapper = styled.div`
  background: ${palette.white};
  width: 100%;
  padding: 100px 0;
  ${palette.md} {
    padding: 30px 0;
    text-align: center;
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

  ul {
    padding-left: 20px;
    ${palette.md} {
    list-style: none;
    }
  }

  li {
    font-weight: 600;
    line-height: 1.8em;
    font-size: 16px;
  }
  ${palette.md} {
    width: 100%;
    }
`;

const ImageSection = styled.div`
  width: 50%;
  padding-left: 60px;
  ${palette.md} {
    width: 100%;
    padding-left: 0px;
    margin-top: 40px;
    }
  img {
      width: 100%;
  }
`;

const Community = () => {
    return (
        <HeroWrapper id="about">
            <Container>
              <H2>Learn from the top minds in DeFi</H2>
                <InnerWrapper>
                    <TextSection>
                        
                        <Paragraph marginBottom >There is more to UniWhales than the dashboard and Telegram alerts. To stay on top of DeFi, join our DAO, a DeFi analytics community with some of the top minds in crypto:</Paragraph>
                        <ul>
                          <li>Informative, fun interactive webinars with builders + traders</li>
                          <li>Access to a dynamic, curated community with a large wealth of DeFi knowledge </li>
                          <li>Ability to request and vote on new to make the platform more useful for you</li>
                          <li>Tips, tricks, the latest token, news, data analysis, and some killer memes</li>
                        </ul>  
                    </TextSection>
                    <ImageSection>
                        <img src={Dashboard} alt="Uniwhales Dashboard" />
                    </ImageSection>
                </InnerWrapper>
            </Container>
        </HeroWrapper>
	)
}

export default Community