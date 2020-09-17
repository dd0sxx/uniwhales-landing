import React from 'react'

import './Hamburger.scss'

const Hambuger = ({ hamburgerState, toggleFunction }) => {
	return (
		<div
			className="hamburger-button"
			onClick={() => toggleFunction(!hamburgerState)}
		>
			<i></i>
		</div>
	)
}

export default Hambuger
