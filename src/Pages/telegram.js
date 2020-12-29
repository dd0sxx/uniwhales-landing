import React from 'react'
import styled from 'styled-components'
import * as palette from '../palette.js';
import Container from '../components/Container/Container.js';
import { Row, Col } from 'react-bootstrap'
import SEO from '../Layout/Seo.js'
import Header from '../Layout/Header.js'
import Footer from '../Layout/Footer.js'
import { H2, Paragraph } from '../components/Typography/Typography.js';

const Wrapper = styled.div`
  background: ${palette.white};
  width: 100%;
  padding: 200px 0;

  h2 {
	  text-align: left;
	  margin-bottom: 30px;
  }

  .cardstyle {
	  text-align: center;
  }

  .rowstyle {
	  margin-bottom: 50px;
  }

  ol {
	  margin-bottom: 60px;

	  li {
		  font-size: 18px;
		  margin-bottom: 10px;
		  font-weight: bold;
		  ${palette.md} {
			font-size: 16px;

    }
	  }
  }

  ${palette.md} {
	padding: 120px 0;

    }
`;

const Card = styled.div`
  background: ${palette.white};
  width: 100%;
  padding: 30px;
  border: 1px solid ${palette.light_gray};
  color: ${palette.white};
  border-radius: 100px;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 30px;
  transition: all 300ms ease-in-out;

  :hover {
	transform: translate(0, -2px);
  }

  ${palette.md} {
	padding: 20px 0;
	margin-bottom: 10px;
	font-size: 16px;
    }
`;


const TelegramPage = () => {
	
	return (
		<>
            <SEO title="How to Join - Premium Telegram Alerts and DAO"/>
            <Header />
			<Wrapper id="features">
				<Container lesswidth>
					<H2>How to Join - Premium Telegram Alerts and DAO</H2>
					<Paragraph>If you have 5000 or more UWL tokens (<a href="https://info.uniswap.org/pair/0x9d4b552c992ee3b863f3b51e95e46ecf38c21429" target="_blank" rel="noreferrer">Get UWL on Uniswap</a>), you can now start using the premium Telegram alert features and participate in the community DAO. </Paragraph>
					<br></br>
					<Paragraph marginBottom><b>Note:</b> Each of the Telegram channels listed below has a more detailed description of its functionality once you join. 👇👇</Paragraph>
					<H2>Premium Channels</H2>
					<Row className="rowstyle">
						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=recS4hkNHh2mZDpgx_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#165df0'}}>DAO</Card>
							</a>
						</Col>

						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=rec772lcdvYhmtDA2_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#cd04ff'}}>Volume Spikes</Card>
							</a>
						</Col>

						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=recGDRR7eb7mhrg58_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#f07b21'}}>LP Add/Remove</Card>
							</a>
						</Col>

						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=recUcAhJAJLYPnvzp_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#00f0a4'}}>New/Unknown Tokens</Card>
							</a>
						</Col>
						<Col id="whale-channels" md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=rec7X2YaPFmRQwie8_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#fa52a0'}}>SushiWhales</Card>
							</a>
						</Col>
					</Row>
					<H2>Whale Channels (16,000 UWL)</H2>
					<Row className="rowstyle">
						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=recCuAx99IMyBekmz_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#d93204'}}>Power Brokers</Card>
							</a>
						</Col>
					</Row>
					<H2>Instructions</H2>
					<ol>
					<li>Click on any of the Telegram links above to start the process.</li>
					<li>Click on “Connect” in the Telegram bot, which is titled Collab.Land</li>
					<li>This will prompt you to connect a wallet to verify the amount of tokens. Currently, four wallet types are supported. We recommend MetaMask because for the Web App it is the only wallet that we currently support.</li>
					<li>Once verified you’ll see a “Join Group” link in the Collab.Land Telegram bot.</li>
					</ol>
					<Paragraph><strong>Does UniWhales store Telegram ID / Ethereum Address connections of premium members?</strong></Paragraph>
					<Paragraph>
					No, UniWhales team does not store or have access to this information. We use a 3rd party integration called <a href="https://collab.land/">Collab.Land</a> bot, which is built by the <a href="https://abridged.io/">Abridged.io</a> team.
					</Paragraph>
					<Paragraph marginBottom>
					Abridged is connected with many of the top Ethereum communities. For example they were hired to audit and improve the MakerDAO governance process to identify pain points and integrate DAO Ops systems. Read more about their work at abridged.io.
					</Paragraph>
					<H2>Troubleshooting</H2>
					<Paragraph marginBottom>If you have joined a previous collab.land bot before, you may need to clear your Telegram chat history.<br/><br/>You’ll need to repeat the process for every additional channel you would like to join. In step 1, you may need to click on the “Start” button at the bottom of the Collab.Land Telegram bot to start the additional subscription processes.</Paragraph>
					<Paragraph>Honored to have you in the UniWhales community!</Paragraph>
				</Container>
        	</Wrapper>
			<Footer />
		</>
	)
}

export default TelegramPage