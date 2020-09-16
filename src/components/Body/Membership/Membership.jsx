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
					'Find transaction for a specific token',
				]}
			/>
			<MembershipItem
				headline={'Free'}
				miniHeadline={'hold -'}
				text={[
					'Real-time dashboard with latest 100 transaction',
					'Filter by buy or sell transactions',
					'Filter by historical data',
				]}
				button={'border'}
			/>
		</div>
	</div>
)

export default Membership
