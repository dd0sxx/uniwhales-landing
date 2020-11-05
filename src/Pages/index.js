import React from 'react'
import SEO from '../Layout/Seo.js'
import Header from '../Layout/Header.js'
import Hero from '../components/Body/Hero/Hero.js'
import Features from '../components/Body/Features/Features.js'
import Levels from '../components/Body/Levels/Levels.js'
import TokenInfo from '../components/Body/TokenInfo/TokenInfo.js'



const IndexPage = () => {
	
	return (
		<>
            <SEO title="Uniwhales.io"/>
            <Header />
			<Hero />
			<Features />
			<Levels />
			<TokenInfo />
		</>
	)
}

export default IndexPage