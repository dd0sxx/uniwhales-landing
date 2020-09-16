import React from 'react'

import './Body.scss'
import Explore from './Explore/Explore'
import Features from './Features/Features'
import Membership from './Membership/Membership'
import TokenInfo from './TokenInfo/TokenInfo'
import Roadmap from './Roadmap/Roadmap'

const Body = () => {
	return (
		<div className="body-block">
			<Explore />
			<Features />
			<Membership />
			<TokenInfo />
			<Roadmap />
		</div>
	)
}

export default Body
