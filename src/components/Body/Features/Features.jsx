import React from 'react'
import ImageBlock from './ImageBlock/ImageBlock'

import dashbord from '../../../assets/images/realtime-dashbord.svg'
import whales from '../../../assets/images/feature-top-whales.svg'
import telegramm from '../../../assets/images/feature-telegram.svg'

import './Features.scss'

const Features = () => {
	return (
		<div className="features" id="features">
			<div className="body-container features-block">
				<h2>Features</h2>
				<div className="features-block__images">
					<ImageBlock
						image={dashbord}
						headline={'Real Time Dashboard'}
						text={
							'Real-time data that will make it easier to track latest buy/sell transactions on Uniswap with a high volume.'
						}
					/>
					<ImageBlock
						image={whales}
						headline={'Discover top whales'}
						text={
							'Filtering by wallet address will help you to identify what tokens whales are accumulating or dumping.'
						}
					/>
					<ImageBlock
						image={telegramm}
						headline={'Telegram channel'}
						text={'Follow channel on telegram: '}
						link={'https://t.me/uniwhales'}
					/>
				</div>
			</div>
		</div>
	)
}

export default Features
