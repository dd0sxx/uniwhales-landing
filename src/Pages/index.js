import React from 'react'
import SEO from '../Layout/Seo.js'
import Header from '../Layout/Header.js'
import Hero from '../components/Body/Hero/Hero.js'
import Features from '../components/Body/Features/Features.js'
import Transactions from '../components/Body/Transactions/Transactions.js'
import Levels from '../components/Body/Levels/Levels.js'
import TokenInfo from '../components/Body/TokenInfo/TokenInfo.js'
import NewsLetter from '../components/Body/Newsletter/Newsletter.js'
import Footer from '../Layout/Footer.js'



const IndexPage = () => {
	
	return (
		<>
            <SEO title="Uniwhales.io"/>
            <Header />
			<Hero />
			<Features />
			<Transactions />
			<Levels />
			<TokenInfo />
			<NewsLetter />
			<Footer />
		</>
	)
}

export default IndexPage