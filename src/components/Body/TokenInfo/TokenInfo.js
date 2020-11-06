import React from 'react'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import Container from '../../Container/Container.js';
import { H2, Paragraph } from '../../Typography/Typography.js';
import Button from '../../Button/Button'
import Piechart from '../../../assets/images/piechart.png'
import Shipimg from '../../../assets/images/ship.png'

const TokenWrapper = styled.div`
  background: ${palette.dark_blue};
  width: 100%;
  padding: 100px 0;
`;

const Ship = styled.img`
  width: 120px;
  margin-left: 100px;
`;

const InnerWrapper = styled.div`
  text-align: center;

  p {
      font-size: 14px;
      margin-top: 50px;
  }
`;

const PieChartCtn = styled.div`
  width: 100%;
  margin-top: 50px;
  img {
     width: 100%;
     max-width: 700px;
     margin-bottom: 80px;
  }
`;


// const values = [
//     { title: 'Public sale', value: 30, amount: '4,500,000', color: '#165df0' },
//     { title: 'Vault', value: 20, amount: '3,000,000', color: '#0084ff' },
//     { title: 'Private sale', value: 15, amount: '2,250,000', color: '#00a5ff' },
//     { title: 'Development', value: 10, amount: '1,500,000', color: '#3ec3ff' },
//     { title: 'Marketing', value: 10, amount: '1,500,000', color: '#8cddfb' },
//     { title: 'Team wallet', value: 15, amount: '2,250,00', color: '#8cddfb' },
// ]


const TokenInfo = () => {
    return (
      <>
        <Ship src={Shipimg} alt="ship" />
        <TokenWrapper id="token">
            <Container>
                <H2 inverse>UWL Supply Breakdown</H2>
                <InnerWrapper>
                    <PieChartCtn>
                        <img src={Piechart} alt="pie chart" />
                    </PieChartCtn>
                    <Button text="Buy UWL" href="#" />
                    <Paragraph inverse>Total supply 10,000,000 / 15,000,000<br/>Contract: contract url address<br/>Private sale price - 1 ETH = 5,000 | UWL Initial public sale price - 1 ETH = 6,000 UWL</Paragraph>
                </InnerWrapper>
            </Container>
        </TokenWrapper>
      </>
	)
}

export default TokenInfo