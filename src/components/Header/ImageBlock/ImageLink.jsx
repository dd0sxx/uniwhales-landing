import React from 'react'

const ImageLink = ({ image, link }) => (
	<a
		href={link}
		target="_blank"
		rel="noopener noreferrer"
		className="image-link-block__item"
	>
		<img src={image} alt="" />
	</a>
)

export default ImageLink
