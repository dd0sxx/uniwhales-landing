import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import { H3, Paragraph } from '../../Typography/Typography.js';
import Dashboard from '../../../assets/images/dashboard.png'
import Telegram from '../../../assets/images/text-bubble.png'
import Address from '../../../assets/images/address.png'


const FeaturesWrapper = styled.div`
  background: ${palette.white};
  width: 100%;
  padding: 50px 0 100px;
  ${palette.md} {
      padding: 40px 0;
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
      height: 70px;
      margin-bottom: 30px;
      ${palette.md} {
        height: 40px;
    }
  }
  .premium {
      background: ${palette.light_blue};
      color: ${palette.white};
      font-size: 14px;
      font-weight: bold;
      border-radius: 50px;
      display: inline-block;
      padding: 2px 30px;
      margin-top: 20px;
      ${palette.md} {
        font-size: 12px;
        padding: 2px 20px;
        margin-top: 10px;
    }
  }
  ${palette.md} {
    width: 100%;
    margin: 15px 0;
    }
`;

const Features = () => {
    return (
        <FeaturesWrapper id="features">
            <Container>
                <InnerWrapper>
                    <Col>
                        <img src={Dashboard} alt="dashboard" />
                        <H3>Realtime dashboard</H3>
                        <Paragraph>Our robust dashboard displays realtime Uniswap trading data in an easy to use interface</Paragraph>
                    </Col>
                    <Col>
                        <img src={Address} alt="address finder" />
                        <H3>Address filtering</H3>
                        <Paragraph>Found a whale address? Keep an eye on it with our address filtering feature</Paragraph>
                        <div className="premium">Pro</div>
                    </Col>
                    <Col>
                        <img src={Telegram} alt="dashboard" />
                        <H3>Telegram alerts</H3>
                        <Paragraph>Keep up with the latest market movements in our automated Telegram channels</Paragraph>
                    </Col>
                </InnerWrapper>
            </Container>
        </FeaturesWrapper>
	)
}

export default Features