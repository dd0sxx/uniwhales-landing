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
	  margin-bottom: 30px;

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
            <SEO title="How to join the UniWhales Telegram Alerts and DAO"/>
            <Header />
			<Wrapper id="features">
				<Container lesswidth>
					<H2>How to join the Uniwhales Telegram alerts and DAO</H2>
					<Paragraph marginBottom>If you have 5000 or more UWL tokens, you can now start using the premium Telegram alert features as well as be part of the community DAO.</Paragraph>
					<H2>Premium Channels</H2>
					<Row className="rowstyle">
						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=recS4hkNHh2mZDpgx_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#165df0'}}>DAO</Card>
							</a>
						</Col>

						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=rec772lcdvYhmtDA2_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#cd04ff'}}>Volume spikes</Card>
							</a>
						</Col>

						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=recGDRR7eb7mhrg58_-tpc" target="_blank" rel="noreferrer">
								<Card style={{background: '#f07b21'}}>LP add/remove</Card>
							</a>
						</Col>

						<Col md={6} className="cardstyle">
							<a href="https://telegram.me/collablandbot?start=recUcAhJAJLYPnvzp_-tp" target="_blank" rel="noreferrer">
								<Card style={{background: '#00f0a4'}}>Alpha</Card>
							</a>
						</Col>
					</Row>
					<H2>Instructions</H2>
					<ol>
					<li>Click on any of the Telegram links above to start the process.</li>
					<li>Click on “Connect” in the Telegram bot, which is titled Collab.Land</li>
					<li>This will prompt you to connect a wallet to verify the amount of tokens. Currently, four wallet types are supported. We recommend MetaMask because for the Web App (coming soon) it is the only wallet that we currently support.</li>
					<li>Once verified you’ll see a “Join Group” link in the Collab.Land Telegram bot.</li>
					</ol>
					<Paragraph>You’ll need to repeat the process for every additional channel you would like to join. In step 1, you may need to click on the “Start” button at the bottom of the Collab.Land Telegram bot to start the additional subscription processes.</Paragraph>
				</Container>
        	</Wrapper>
			<Footer />
		</>
	)
}

export default TelegramPage