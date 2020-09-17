import React, { useState } from 'react'

import Navigation from '../Header/Navigation/Navigation'
import NavigationItem from '../Header/Navigation/NavigationItem'
import ImageBlock from '../Header/ImageBlock/ImageBlock'
import ImageLink from './ImageBlock/ImageLink'
import Buttons from '../Buttons/Buttons'

import M from '../../assets/images/m-logo.svg'
import Telegramm from '../../assets/images/telegram.svg'
import Twitter from '../../assets/images/twitter.svg'
import './Header.scss'

const Header = ({ logo }) => {
	const [itemId, setItemId] = useState(-1)
	return (
		<header>
			<div className="header-container">
				<div className="header-block">
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<Navigation>
						<NavigationItem
							link={'#features'}
							text={'Features'}
							index={0}
							id={itemId}
							hover={setItemId}
						/>
						<NavigationItem
							link={'#membership'}
							text={'Membership'}
							index={2}
							id={itemId}
							hover={setItemId}
						/>
						<NavigationItem
							link={'#token'}
							text={'Token'}
							index={1}
							id={itemId}
							hover={setItemId}
						/>
						<NavigationItem
							link={'#roadmap'}
							text={'Roadmap'}
							index={3}
							id={itemId}
							hover={setItemId}
						/>
					</Navigation>
					<ImageBlock>
						<ImageLink image={M} link={'https://medium.com/@uniwhales'} />
						<ImageLink image={Telegramm} link={'#'} />
						<ImageLink
							image={Twitter}
							link={'https://twitter.com/uniwhalesio'}
						/>
					</ImageBlock>
					<Buttons text={'launch app'} />
				</div>
			</div>
		</header>
	)
}

export default Header
