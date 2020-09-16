import React from 'react'
import logo from './assets/images/logo.svg'
import Header from '../src/components/Header/Header'
import Body from '../src/components/Body/Body'
import Footer from '../src/components/Footer/Footer'

import './App.css'

const App = () => (
	<div className="App">
		<Header logo={logo} />
		<Body />
		<Footer />
	</div>
)

export default App
