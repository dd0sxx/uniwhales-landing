import React from 'react'

import './Buttons.scss'

const Buttons = ({ text, link }) => {
	return (
		<button className="main-button">
			{link ? (
				<a href={link} target="_blank" rel="noopener noreferrer">
					{text}
				</a>
			) : (
				<a href="/">{text}</a>
			)}
		</button>
	)
}

export default Buttons
