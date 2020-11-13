import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import Container from '../../Container/Container.js';
import { H3, H2, Paragraph } from '../../Typography/Typography.js';



const Wrapper = styled.div`
  background: ${palette.light_gray};
  width: 100%;
  padding: 60px 0 100px 0;
  ${palette.sm} {
    padding: 50px 0;
    }
`;

const InnerWrapper = styled.div`
  text-align: center;

  p {
    margin-bottom: 20px;
    max-width: 750px;
    text-align: center;
    display: inline-block;
  }
`;

const Card = styled.div`
  width: 100%;
  margin: 0;
  text-align: left;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,.04);
  -webkit-box-shadow: 0 8px 20px rgba(0,0,0,.04); 
  color: ${palette.dark_blue};
  padding: 40px 30px;
  background-color: ${palette.white};
  margin-bottom: 30px;

  .details {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    ${palette.sm} {
    justify-content: center;
    }
  }

  h3 {
    font-size: 20px;
    color: ${palette.gray};
    margin: 0;
    display: inline-block;
  }

  .buysell {
    width: 10px;
    height: 10px;
    border-radius: 40px;
    margin: 0;
    margin-left: 6px;
    margin-top: 4px;
    display: inline-block;
    ${palette.sm} {
      width: 7px;
    height: 7px;
    margin-left: 5px;
    margin-top: 3px;
    }
  }

  h2 {
    font-size: 28px;
    margin: 0;
    text-align: left;
    margin-bottom: 0;
    ${palette.sm} {
    text-align: center;
    font-size: 20px;
    }
  }

  :hover {
    box-shadow: 0 8px 20px rgba(0,0,0,.12);
    --webkit-box-shadow: 0 8px 20px rgba(0,0,0,.12);
  }

  ${palette.sm} {
    text-align: center;
    padding: 20px;
    margin-bottom: 10px;

    h3 {
    font-size: 16px;
  }
    }
`;

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default class Transactions extends React.Component {
  state = {
    transactions: [],
    trendingtokens: [],
  }

  componentDidMount() {
    axios.get(`https://api.uniwhales.io/txs/trending-tokens/`)
      .then(res => {
        const trendingtokens = Object.entries(res.data);
        this.setState({ trendingtokens });
      })
      axios.get(`https://api.uniwhales.io/txs/top-txs/`)
      .then(res => {
        const transactions = res.data.txs;
        this.setState({ transactions });
      })
  }




render() {
  const ethscan = "https://etherscan.io/tx/"
  return (
    <Wrapper id="transactions">
            <Container>
                <InnerWrapper>
                <Tabs defaultActiveKey="top-transactions">
                  <Tab eventKey="top-transactions" title="Top transactions">
                    <Paragraph>Largest Uniswap trades over the last 24 hours</Paragraph>
                    <Row>
                      { this.state.transactions.slice(0, 6).map(transactions => 
                        <Col sm={12} md={6} lg={4} key={transactions.hash}>
                          <a target="_blank" rel="noreferrer" href={ethscan + transactions.hash}>
                            <Card>
                              <div className="details">
                              <H3>{transactions.transaction.from.token} &gt; {transactions.transaction.for.token}</H3>
                              {transactions.type === 'sell' ? (
                                  <div className="buysell" style={{backgroundColor:'#fe7200'}}></div>
                                ):(
                                  <div className="buysell" style={{backgroundColor:'#02ee87'}}></div>
                                  )
                                }
                                </div>
                              <H2>${numberWithCommas(`${transactions.total_usd.toFixed()}`)}</H2>
                            </Card>
                          </a>
                        </Col>
                        )}
                    </Row>
                  </Tab>
                  <Tab eventKey="profile" title="Trending tokens">
                  <Paragraph>Tokens with the highest number of whale volume ($10,000 USD minimum) transactions over the last 24 hours. Excludes WBTC, ETH, and stablecoin-ETH pairs.</Paragraph>
                    <Row>
                      { this.state.trendingtokens.slice(0, 4).map(trendingtokens => 
                        <Col md={3} key={trendingtokens}>
                            <Card center>
                            <div className="details">
                              <H3>{trendingtokens[1]} Txs</H3>
                              <div className="buysell" style={{backgroundColor:'#02ee87'}}></div>
                            </div>
                              <H2>{trendingtokens[0]}</H2>
                            </Card>
                        </Col>
                        )}
                    </Row>
                  </Tab>
                </Tabs>
                </InnerWrapper>
            </Container>
        </Wrapper>
  )
}
}
