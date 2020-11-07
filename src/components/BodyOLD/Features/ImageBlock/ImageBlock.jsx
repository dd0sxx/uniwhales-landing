import React from 'react'

import './ImageBlock.scss'

const ImageBlock = ({ image, headline, text, link }) => {
	return (
		<div className="features-block__image-block">
			<div className="features-block__image">
				<img src={image} alt="" />
			</div>
			<div className="features-block__headline">
				<h4>{headline}</h4>
			</div>
			<div className="features-block__text">
				<p>{text}</p>
				<a href={link}>{link}</a>
			</div>
		</div>
	)
}

export default ImageBlock
