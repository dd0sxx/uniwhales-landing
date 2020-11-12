import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import * as palette from '../../../palette.js';
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import Container from '../../Container/Container.js';
import { H3, H2 } from '../../Typography/Typography.js';



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
    margin-top: 5px;
    display: inline-block;
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


export default class Transactions extends React.Component {
  state = {
    transactions: [],
    trendingtokens: [],
    trendingtokenValues: []
  }

  componentDidMount() {
    axios.get(`http://api.uniwhales.io/txs/trending-tokens/`)
      .then(res => {
        const trendingtokens = Object.keys(res.data);
        this.setState({ trendingtokens });
      })
      axios.get(`http://api.uniwhales.io/txs/top-txs/`)
      .then(res => {
        const transactions = res.data.txs;
        console.log(transactions);
        this.setState({ transactions });
      })
  }



render() {
  return (
    <Wrapper>
            <Container>
                <InnerWrapper>
                <Tabs defaultActiveKey="top-transactions">
                  <Tab eventKey="top-transactions" title="Top transactions">
                    <Row>
                      { this.state.transactions.slice(0, 6).map(transactions => 
                        <Col sm={12} md={6} lg={4} key={transactions.hash}>
                          <a href="/#">
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
                              <H2>${transactions.total_usd}</H2>
                            </Card>
                          </a>
                        </Col>
                        )}
                    </Row>
                  </Tab>
                  <Tab eventKey="profile" title="Trending tokens">
                    <Row>
                      { this.state.trendingtokens.slice(0, 4).map(trendingtokens => 
                        <Col md={3} key={trendingtokens}>
                          <a href="/#">
                            <Card>
                            <H2 style={{textAlign: 'center'}}>{trendingtokens}</H2>
                            </Card>
                          </a>
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
