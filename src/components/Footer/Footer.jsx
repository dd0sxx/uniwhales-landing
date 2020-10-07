import React from 'react'
import ImageBlock from '../Header/ImageBlock/ImageBlock'
import ImageLink from '../Header/ImageBlock/ImageLink'

import M from '../../assets/images/m-logo.svg'
import Telegramm from '../../assets/images/telegram.svg'
import Twitter from '../../assets/images/twitter.svg'

import './Footer.scss'

const Footer = () => {
	return (
		<div className="footer-block">
			<div className="footer-container">
				<div className="contacts-block">
					<span>Contact:</span>
					<p>info@uniwhales.io</p>
				</div>
				{/* <div className="links-block">
					<a href="/">Link 1</a>
					<a href="/">Link 2</a>
					<a href="/">Link 3</a>
				</div> */}
				<div className="social-copyright">
					<ImageBlock>
						<ImageLink image={M} link={'https://medium.com/@uniwhales'} />
						<ImageLink image={Telegramm} link={'#'} />
						<ImageLink
							image={Twitter}
							link={'https://twitter.com/uniwhalesio'}
						/>
					</ImageBlock>
					<div className="copyright-block">
						<p>Copyright © 2020 UniWhales.io</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
