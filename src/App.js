import React from 'react'
import logo from './assets/images/logo.svg'
import Header from '../src/components/Header/Header'
import Body from '../src/components/Body/Body'
import Footer from '../src/components/Footer/Footer'

import { withRouter } from 'react-router-dom'

import './App.scss'
import './assets/styles/styles.scss'

const App = ({ location }) => {
	console.log(location.pathname)
	return (
		<div className="App">
			<Header logo={logo} />
			<Body location={location.pathname} />
			<Footer />
		</div>
	)
}

export default withRouter(App)
