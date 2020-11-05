import React from 'react'
import Buttons from '../../../Buttons/Buttons'
import BorderButton from '../../../Buttons/BorderButton'

const MembershipItem = ({
	headline,
	miniHeadline,
	text = [],
	button = 'default',
}) => {
	return (
		<div className="membership-block__item">
			<div className="membership-block__headline">
				<h3>{headline}</h3>
				<h5>{miniHeadline}</h5>
			</div>
			<div className="membership-block__text">
				{text.map((item, index) => {
					return <p key={index}>{item}</p>
				})}
			</div>
			<div className="membership-block__buttons">
				{button === 'default' ? (
					<Buttons text={'buy'} />
				) : (
					<BorderButton text={'launch app'} />
				)}
			</div>
		</div>
	)
}

export default MembershipItem
