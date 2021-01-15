import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import Santiago from '../../../assets/images/santiago.jpg'
import Guto from '../../../assets/images/guto.jpg'
import Redphone from '../../../assets/images/redphone.jpg'


const HeroWrapper = styled.div`
  background: ${palette.dark_blue};
  width: 100%;
  padding: 100px 0;
  ${palette.md} {
    padding: 30px 0;
    text-align: center;
    }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: top;
  flex-direction: row;
    ${palette.md} {
      flex-direction: column;
      }
`;

const Col = styled.div`
  width: 33.33333%;
  margin: 0 20px;
  text-align: center;
  img {
      height: 100px;
      margin-bottom: 30px;
      border-radius: 100px;
      border: 3px solid ${palette.off_white};
      ${palette.md} {
        height: 80px;
        margin-bottom: 20px;
    }
  }
  }
  ${palette.md} {
    width: 100%;
    margin: 20px 0;
    }
`;

const Quote = styled.div`
  font-size: 18px;
  line-height: 1.9em;
  color: #fff;
  font-weight: 600;
  font-style: italic;
  font-family: 'League Spartan';
    ${palette.md} {
      font-size: 16px;
      }
`;

const Author = styled.div`
  font-size: 18px;
  color: ${palette.off_white};
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 2px;
    ${palette.md} {
      font-size: 16px;
      }
`;

const Title = styled.div`
  font-size: 14px;
  color: ${palette.off_white};
    ${palette.md} {
      
      }
`;


const Testimonials = () => {
    return (
        <HeroWrapper>
            <Container>
                <InnerWrapper>
                    <Col>
                      <img src={Santiago} alt="Santiago" />
                      <Quote>"Beyond being a super useful analytics tool, it’s a brilliant on-chain subscription monetization model"</Quote>
                      <Author>Santiago R Santos</Author>
                      <Title>Partner @Paraficapital</Title>
                    </Col>
                    <Col>
                      <img src={Guto} alt="Guto" />
                      <Quote>"Uniwhales is not only a superb tool, but a truly outstanding community"</Quote>
                      <Author>Guto Martinez</Author>
                      <Title>Marketing Manager @HathorNetwork</Title>
                    </Col>
                    <Col>
                      <img src={Redphone} alt="Redphone" />
                      <Quote>"I think they're building some pretty BA tools for traders. I use it regularly to track transactions by the big-boi/big-gurl wallets"</Quote>
                      <Author>Red Phone Crypto</Author>
                      <Title>Crypto storyteller</Title>
                    </Col>
                </InnerWrapper>
            </Container>
        </HeroWrapper>   
	)
}

export default Testimonials