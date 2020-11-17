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
  ${palette.md} {
    padding: 30px 0;
    }
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
      ${palette.md} {
        font-size: 12px;
    }
  }

  .address {
    color: ${palette.light_blue};
    :hover {
      text-decoration: underline;
    }
  }
`;

const PieChartCtn = styled.div`
  width: 100%;
  margin-top: 50px;
  img {
     width: 100%;
     max-width: 700px;
     margin-bottom: 80px;
     ${palette.md} {
      margin-bottom: 50px;
    }
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
                    <Button text="Get UWL" href="#" />
                    <Paragraph inverse>Team reserve (15%) locked for 6 months | Uniswap LP (25%) locked for 6 months<br />Circulating supply: 8,500,000 | Total supply: 10,000,000<br/>UWL Token Contract: <a className="address" href="https://etherscan.io/token/0xdbdd6f355a37b94e6c7d32fef548e98a280b8df5">0xdbdd6f355a37b94e6c7d32fef548e98a280b8df5</a><br/>UWL private sale price - 1 ETH = 10,000 UWL | UWL initial public sale price - 1 ETH = 8,000 UWL</Paragraph>
                </InnerWrapper>
            </Container>
        </TokenWrapper>
      </>
	)
}

export default TokenInfo