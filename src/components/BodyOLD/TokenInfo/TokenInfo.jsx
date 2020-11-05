import React from 'react'
import piechart from '../../../assets/images/piechart.svg'

import { TABLE_VALUE as tableValue } from './data'

import './TokenInfo.scss'

const TokenInfo = () => {
	return (
		<div className="token-info" id="token">
			<h2>Token Info</h2>
			<div className="body-container token-info-block">
				<div className="list-block">
					{tableValue.map((item, index) => {
						return (
							<div className={`list-block__item block-${index}`} key={index}>
								<div className="title">
									<p className="bold">{item.title}:</p>
								</div>
								<div className="value">
									<p>{item.value}</p>
								</div>
							</div>
						)
					})}
					<div className="info-text">
						<p className="bold">Contract: contract url address</p>
						<p>
							<b>Private sale price</b> - 1 ETH = 5,000 UWL
						</p>
						<p>
							<b>Initial public sale price</b> - 1 ETH = 6,000 UWL
						</p>
					</div>
				</div>
				<div className="graph-block">
					<img src={piechart} alt="" />
				</div>
				<div className="info-block">
					<p>
						Development and Marketing wallets are soft locked. Team wallet is
						locked for 3 months.
					</p>
				</div>
			</div>
		</div>
	)
}

export default TokenInfo
