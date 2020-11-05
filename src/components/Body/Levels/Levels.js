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
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: top;
  flex-direction: row;
`;

const Card = styled.div`
  width: 33.33333%;
  margin: 0 20px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 21px 5px rgba(0,0,0,0.17); 
  box-shadow: 0px 0px 21px 5px rgba(0,0,0,0.17);
  border-radius: 20px;
  color: ${palette.dark_blue};
  display: flex;
  flex-direction: column;
  border: ${props => props.outline ? "3px solid" + palette.light_blue : "none"};
  padding-bottom: 30px;

  h2 {
      margin: 30px 0 25px;
  }

  h3 {
      text-align: center;
      width: 100%;
      background: ${palette.light_gray};
      padding: 25px 0 15px;
      margin-bottom: 0;
  }

  .buttonbottom {
    margin-top:auto;
  }

`;

const List = styled.div`
  width: 100%;
  padding: 40px;
  text-align: center;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  margin-bottom: 30px;
  text-align: left;

  img {
      width: 18px;
      height: 16px;
      margin: 5px 8px 0 0;
  }

`;

const Levels = () => {
    return (
        <LevelsWrapper>
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
                                Filter by max and min USD amounts
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Filter by historical data
                            </ListItem>
                        </List>
                        <div className="buttonbottom">
                            <Button inverse text="Open App" href="https://app.uniwhales.io/" />
                        </div>
                    </Card>
                    <Card outline>
                        <H2>Premium</H2>
                        <H3>Hold 5k UWL</H3>
                        <List>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Filter by address
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Filter by token
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Access to the premium telegram channels
                            </ListItem>
                        </List>
                        <div className="buttonbottom">
                            <Button inverse text="Get UWL" href="#" />
                        </div>
                    </Card>
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
                                Filter by max and min USD amounts
                            </ListItem>
                            <ListItem>
                                <img src={Checkmark} alt="checkmark" />
                                Filter by historical data
                            </ListItem>
                        </List>
                        <div className="buttonbottom">
                            <Button inverse text="Get UWL" href="#" />
                        </div>
                    </Card>
                </InnerWrapper>
            </Container>
        </LevelsWrapper>
	)
}

export default Levels
