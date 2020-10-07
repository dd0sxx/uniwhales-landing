import React from 'react'

import './Body.scss'
import Explore from './Explore/Explore'
import Features from './Features/Features'
import Membership from './Membership/Membership'
import TokenInfo from './TokenInfo/TokenInfo'
import Roadmap from './Roadmap/Roadmap'

import PageNotFound from '../PageNotFound/PageNotFound'

const Body = ({ location }) => {
	return (
		<div className="body-block">
			{location === '/' ? (
				<>
					<Explore />
					<Features />
					<Membership />
					<TokenInfo />
					<Roadmap />
				</>
			) : (
				<PageNotFound />
			)}
		</div>
	)
}

export default Body
