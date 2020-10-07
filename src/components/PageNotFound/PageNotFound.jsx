import React from 'react'
import Button from '../Buttons/Buttons'
import notFoundImageNight from '../../assets/images/404_night.svg'

import './PageNotFound.scss'

const PageNotFound = () => (
	<div className="page-not-found">
		<div className="page-not-found-block">
			<div className="image-block">
				<img src={notFoundImageNight} alt="" />
			</div>
			<div className="text-block">
				<h2 className="title">Oops! Page not found&nbsp;... </h2>
				<p className="text">
					The page you&rsquo;re looking for was moved, removed, renamed
					or&nbsp;might never exist!
				</p>
			</div>
			<div className="button-block">
				<Button text={'Go Back'} link={'/'} />
			</div>
		</div>
	</div>
)

export default PageNotFound
