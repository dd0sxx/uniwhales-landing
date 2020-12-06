import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import { H2, H3 } from '../../Typography/Typography.js';
import Checkmark from '../../../assets/images/checkmark.png'
import Button from '../../Button/Button'


const LevelsWrapper = styled.div`
  background: ${palette.white};
  width: 100%;
  padding: 100px 0;
  ${palette.md} {
    padding: 50px 0;
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

const Card = styled.div`
  width: 33.33333%;
  margin: 0 10px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 11px 2px rgba(0,0,0,0.17); 
  box-shadow: 0px 0px 11px 2px rgba(0,0,0,0.17);
  border-radius: 20px;
  color: ${palette.dark_blue};
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  h2 {
      margin: 30px 0 25px;
  }

  h3 {
      text-align: center;
      width: 100%;
      background: ${palette.light_blue};
      padding: 25px 0 15px;
      margin-bottom: 0;
      color: ${palette.white};
      span {
          font-size: 18px;
          display: block;
      }
  }

  .buttonbottom {
    margin-top:auto;
  }

  ${palette.md} {
    width: 100%;
    margin: 10px 0;
    h3 {
      span {
          font-size: 14px;
         
      }
  }
    }

`;

const List = styled.div`
  width: 100%;
  padding: 40px 25px;
  text-align: center;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;

  img {
      width: 14px;
      height: 12px;
      margin: 8px 8px 0 0;
  }

  ${palette.md} {
    font-size: 14px;
    }

`;

const Levels = () => {
    return (
        <LevelsWrapper id="access">
            <Container>
                <H2>Access Levels</H2>
                <InnerWrapper>
                    <Card>
                        <H2>Basic</H2>
                        <H3>FREE</H3>
                        <List>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Real-time data with latest 100 transactions
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Filter by USD amounts (50k min)
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Access to main Telegram channel
                            </ListItem>
                        </List>
                        <div className="buttonbottom">
                            <Button inverse href="https://app.uniwhales.io/" text="Launch App" />
                        </div>
                    </Card>
                    <Card>
                        <H2>Pro</H2>
                        <H3>Hold 5k UWL<span>Coming soon</span></H3>
                        <List>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Adjustable txn threshold (min. 10k)
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Token name and address filters
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                In-depth whale analysis (profitability, top trades, position sizing)
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Robust historical data
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Access to Pro Telegram channels
                            </ListItem>
                        </List>
                        <div className="buttonbottom">
                            <Button inverse text="Get UWL" href="https://info.uniswap.org/pair/0x9d4b552c992ee3b863f3b51e95e46ecf38c21429" />
                        </div>
                    </Card>
                    <Card>
                        <H2>Whale</H2>
                        <H3>Coming soon</H3>
                        <List>
                            <ListItem>
                                <img src={Checkmark} style={{filter: 'grayscale(100%)'}} alt="checkmark" />
                                Everything in Pro plus more data sorting and customized signals based on DAO group feedback
                            </ListItem>
                            <ListItem style={{filter: 'blur(3px)'}}>
                                <img src={Checkmark} style={{filter: 'grayscale(100%)'}} alt="checkmark" />
                                Advanced wallet tracking
                            </ListItem>
                            <ListItem style={{filter: 'blur(3px)'}}>
                                <img src={Checkmark} style={{filter: 'grayscale(100%)'}} alt="checkmark" />
                                Highly customizable analytics
                            </ListItem>
                            <ListItem style={{filter: 'blur(3px)'}}>
                                <img src={Checkmark} style={{filter: 'grayscale(100%)'}} alt="checkmark" />
                                Integrated trading platform
                            </ListItem>
                            
                        </List>
                        <div className="buttonbottom">
                            <Button inverse text="Get UWL" href="https://info.uniswap.org/pair/0x9d4b552c992ee3b863f3b51e95e46ecf38c21429" />
                        </div>
                    </Card>
                </InnerWrapper>
            </Container>
        </LevelsWrapper>
	)
}

export default Levels
