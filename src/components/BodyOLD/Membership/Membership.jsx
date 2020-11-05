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
					'Whale explorer: find transaction made by whale',
					'Token explorer: find transactions for a specific token',
					'Access to the premium telegram channels'
				]}
			/>
			<MembershipItem
				headline={'Free'}
				miniHeadline={'hold -'}
				text={[
					'Real-time data with latest 100 transaction',
					'Filter by Max and Min USD amount',
					'Filter by historical data',
				]}
				button={'border'}
			/>
		</div>
	</div>
)

export default Membership
