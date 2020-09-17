import React from 'react'
import Buttons from '../../Buttons/Buttons'
import image from '../../../assets/images/explore.svg'

import './Explore.scss'

const Explore = () => {
	return (
		<div className="explore">
			<div className="explore__background"></div>
			<div className="body-container explore-block">
				<div className="explore-block__image">
					<img src={image} alt="" />
				</div>
				<div className="explore-block__text">
					<h2>Explore Uniswap Whales</h2>
					<p>
						UniWhales helps you to&nbsp;keep track of&nbsp;latest BUY and SELL
						transactions on&nbsp;Uniswap with a&nbsp;high volume, giving you
						insides where the capital flows to.
					</p>
					<Buttons text={'LAUNCH APP'} />
				</div>
			</div>
		</div>
	)
}

export default Explore
