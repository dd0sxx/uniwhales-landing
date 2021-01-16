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
              <H2>More than a dashboard</H2>
                <InnerWrapper>
                    <TextSection>
                        
                        <Paragraph marginBottom >There is more to UniWhales than the dashboard and Telegram alerts. You'll also gain access to one of the best Defi communities out there! When you join our community you can expect:</Paragraph>
                        <ul>
                          <li>Informative webinars with some of the best names in the space</li>
                          <li>Access to an amazing community with a large wealth of knowledge</li>
                          <li>Ability to request features and share ideas</li>
                          <li>Tips, tricks and dank memes</li>
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