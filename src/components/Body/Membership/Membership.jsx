import React from 'react'
import MembershipItem from '../Membership/MembershipItem/MembershipItem'

import './Membership.scss'

const Membership = () => (
	<div className="membership" id="membership">
		<h2>Membership</h2>
		<div className="body-container membership-block">
			<MembershipItem
				headline={'Premium'}
				miniHeadline={'hold 5 000 UWL'}
				text={[
					'Adjustable minimum and maximum volume thresholds',
					'Explore whale: find all transaction for a specific address',
					'Find transactions for a specific token',
				]}
			/>
			<MembershipItem
				headline={'Free'}
				miniHeadline={'hold -'}
				text={[
					'Real-time data with latest 100 transaction',
					'Filter by Buy or Sell transactions',
					'Filter by historical data',
				]}
				button={'border'}
			/>
		</div>
	</div>
)

export default Membership
