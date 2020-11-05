import React from 'react'

import './Roadmap.scss'

const Roadmap = () => {
	return (
		<div className="roadmap" id="roadmap">
			<div className="body-container roadmap-block">
				<h2>Roadmap</h2>
				<div className="roadmap-block__content">
					<div className="timeline"></div>
					<div className="roadmap-block__period">
						<div className="headline-block">
							<h5>2020, Q3</h5>
						</div>
						<div className="text-block">
							<p>Alert telegram bot - completed</p>
							<p>Alpha launch - completed</p>
							<p>Token launch</p>
						</div>
					</div>
					<div className="roadmap-block__period">
						<div className="headline-block">
							<h5>2020, Q4</h5>
						</div>
						<div className="text-block">
							<p>Premium telegram channels</p>
							<p>DAO Launch</p>
							<p>New features based on community needs</p>
							<p>Beta release</p>
						</div>
					</div>
					<div className="roadmap-block__period">
						<div className="headline-block">
							<h5>2021, Q1</h5>
						</div>
						<div className="text-block">
							<p>Feedback analysis</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Roadmap
