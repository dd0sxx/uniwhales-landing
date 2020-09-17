import React from 'react'
import cn from 'classnames'

const Navigation = ({
	link,
	text,
	index,
	id,
	hover,
	toggleMenu = false,
	menuState = false,
}) => {
	const hoverItem = () => {
		hover(index)
	}

	return (
		<div className="navigation-block__item">
			<a
				href={link}
				className={cn('link', { unhover: index !== id && id !== -1 })}
				onMouseEnter={() => hoverItem()}
				onMouseLeave={() => hover(-1)}
				onClick={() => toggleMenu(!menuState)}
			>
				{text}
			</a>
		</div>
	)
}

export default Navigation
