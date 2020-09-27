import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import Hambuger from './Hamburger/Hamburger'
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
	const [hamburgerState, toggleHamburger] = useState(false)
	const [fixed, setFixed] = useState(false)

	const scrollHandler = () => {
		if (window.pageYOffset > 86) {
			setFixed(true)
		} else {
			setFixed(false)
		}
	}

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
	}, [])

	return (
		<header>
			{fixed && <div className="header-plug"></div>}
			<div className={cn('header-container', { fixed: fixed })}>
				<div className="header-block">
					<Hambuger
						hamburgerState={hamburgerState}
						toggleFunction={toggleHamburger}
					/>
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
					<Buttons text={'launch app'} link={'https://app.uniwhales.io/'} />
				</div>
				<div className={cn('burger-menu', { active: hamburgerState })}>
					<NavigationItem
						link={'#features'}
						text={'Features'}
						index={0}
						id={itemId}
						hover={setItemId}
						menuState={hamburgerState}
						toggleMenu={toggleHamburger}
					/>
					<NavigationItem
						link={'#membership'}
						text={'Membership'}
						index={2}
						id={itemId}
						hover={setItemId}
						menuState={hamburgerState}
						toggleMenu={toggleHamburger}
					/>
					<NavigationItem
						link={'#token'}
						text={'Token'}
						index={1}
						id={itemId}
						hover={setItemId}
						menuState={hamburgerState}
						toggleMenu={toggleHamburger}
					/>
					<NavigationItem
						link={'#roadmap'}
						text={'Roadmap'}
						index={3}
						id={itemId}
						hover={setItemId}
						menuState={hamburgerState}
						toggleMenu={toggleHamburger}
					/>
					<ImageBlock>
						<ImageLink image={M} link={'https://medium.com/@uniwhales'} />
						<ImageLink image={Telegramm} link={'#'} />
						<ImageLink
							image={Twitter}
							link={'https://twitter.com/uniwhalesio'}
						/>
					</ImageBlock>
					<div className="buttons-block">
						<Buttons text={'launch app'} link={'https://app.uniwhales.io/'} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
