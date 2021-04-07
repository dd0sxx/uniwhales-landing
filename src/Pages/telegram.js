import React, { useState } from 'react'
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
  border-radius: 20px;
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.06); 
  box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.06);
  transition: all 300ms ease-in-out;

  h3 {
	  padding: 20px 0;
	  color: #fff;
	  font-weight: bold;
	  border-radius: 10px;
	  font-size: 18px;
	  margin-bottom: 0;
	  cursor: pointer;
	  user-select: none;
  }

  p {
	  margin-top: 20px;
  }

  a {
	color: ${palette.off_white};
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 10px 30px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  display: inline-block;
  background-color: ${palette.light_blue};
  margin-top: 20px;
  :hover {
      text-decoration: none;
      color: ${palette.white};
      background: ${palette.light_blue};
      padding: 10px 35px;
  }
  }

  .non-active-item {
	  display: none;
  }

  .active-item {
	  display: inline-block;
  }


  ${palette.md} {
	padding: 20px;
	margin-bottom: 10px;
	font-size: 16px;
    }
`;


const TelegramPage = () => {

	const channels = [
		{
			name: 'DAO',
			description: 'The heart and soul of UniWhales - our community discussion with some of the brightest and creative minds of DeFi',
			color: '#165df0',
			link: 'https://telegram.me/collablandbot?start=recS4hkNHh2mZDpgx_-tpc'
		},
		{
			name: 'DAO Announcements',
			description: 'Need to catch up on the latest with our platform without reading through hundreds of messages? This is the place. Learn about new product features, content, and everything to get the most out of our platform.',
			color: '#007bff',
			link: 'https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMTkxOTUzODc3'
		},
		{
			name: 'Volume Spikes',
			description: 'This bot alerts high % volume spikes over 15 minutes relative to the last 24 hours of volume.',
			color: '#cd04ff',
			link: 'https://telegram.me/collablandbot?start=rec772lcdvYhmtDA2_-tpc'
		},
		{
			name: 'LP Add/Remove',
			description: 'Find where the whales are providing liquidity: alerts of any Uniswap liquidity adds/removes of $250,000 USD minimum.',
			color: '#f07b21',
			link: 'https://telegram.me/collablandbot?start=recGDRR7eb7mhrg58_-tpc'
		},
		{
			name: 'New/Unknown Tokens',
			description: 'Find new tokens on Uniswap. Alerts for the first 2.5k, 5k, & then only 10k USD + swaps of a token. Alerts continue for the following 24 hours OR after reaching a limit of 50+ tx, whichever comes first.',
			color: '#00f0a4',
			link: 'https://telegram.me/collablandbot?start=recUcAhJAJLYPnvzp_-tpc'
		},
		{
			name: '1inch Whales',
			description: 'Tracking the large trades of 1inch DEX',
			color: '#272a30',
			link: 'https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMjA2MTEwNTg1'
		},
		{
			name: 'SushiWhales',
			description: 'Tracking the large trades of SushiSwap',
			color: '#fa52a0',
			link: 'https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxNDk5NzkxMTY2'
		},
		{
			name: 'VC Deal Tracker',
			description: 'Tracking VC investments into DeFi projects',
			color: '#228B22',
			link: 'https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMDc4OTkyMDk5'
		},
	
	]

	const whale_channels = [
		{
			name: 'Power Brokers',
			description: 'Track the Ethereum activity of the top traders and influencers in DeFi. A curated list of addresses and identities maintained by a crypto researcher. Now with weekly data reports every Tuesday.',
			color: '#d93204',
			link: 'https://telegram.me/collablandbot?start=recCuAx99IMyBekmz_-tpc'
		},
		{
			name: 'NFT Whales (GMoneyNFT)',
			description: 'A curated list by GMoney NFT of the best NFT traders/collectors. Tracking NFT mints, trades, transfers, and burns.',
			color: '#165df0',
			link: 'https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMjIzODk4MTQ2'
		},
	]

	const [activeID, setActiveID] = useState("")

	const handleClick = (id) => {
		if (id === activeID) {
			setActiveID("")
		}
		else {
		setActiveID(id)
		}
	}
	
	return (
		<>
            <SEO title="How to Join - Pro Telegram Alerts and DAO"/>
            <Header />
			<Wrapper id="features">
				<Container lesswidth>
					<H2>How to Join - Pro Telegram Alerts and DAO</H2>
					<Paragraph>If you have 5000 or more UWL tokens (<a href="https://info.uniswap.org/pair/0x9d4b552c992ee3b863f3b51e95e46ecf38c21429" target="_blank" rel="noreferrer"> Uniswap</a>-<a href="https://app.sushiswap.fi/pair/0x0040a2cebc65894bc2cfb57565f9acfa33fab137" target="_blank" rel="noreferrer"> SushiSwap</a>), you can now start using the premium Telegram alert features and participate in the community DAO. </Paragraph>
					<br></br>
					<Paragraph marginBottom><b>Note:</b> Each of the Telegram channels listed below has a more detailed description of its functionality if you click the box 👇👇</Paragraph>
					<H2>Pro Channels</H2>
					<Row className="rowstyle">


						{channels.map((channel) => {
						return (
							<Col md={6} className="cardstyle">
								<Card onClick={() => {handleClick(channel.name)}}> 
									<h3 style={{background: channel.color}}>{channel.name}</h3>
									<Paragraph className={(channel.name === activeID ? 'active-item' : 'non-active-item')}>{channel.description}</Paragraph>
									<a className={(channel.name === activeID ? 'active-item' : 'non-active-item')} style={{background: channel.color}} href={channel.link} target="_blank" rel="noreferrer">Join Channel</a>
								</Card>
							</Col>
							)
							})}

					</Row>
					<H2>Whale Channels (16,000 UWL)</H2>
					<Row className="rowstyle">
					{whale_channels.map((channel) => {
						return (
							<Col md={6} className="cardstyle">
								<Card onClick={() => {handleClick(channel.name)}}> 
									<h3 style={{background: channel.color}}>{channel.name}</h3>
									<Paragraph className={(channel.name === activeID ? 'active-item' : 'non-active-item')}>{channel.description}</Paragraph>
									<a className={(channel.name === activeID ? 'active-item' : 'non-active-item')} style={{background: channel.color}} href={channel.link} target="_blank" rel="noreferrer">Join Channel</a>
								</Card>
							</Col>
							)
							})}
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