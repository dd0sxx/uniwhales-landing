import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './assets/fonts/Poppins/Poppins-Regular.ttf'
import './assets/fonts/Poppins/Poppins-Medium.ttf'
import './assets/fonts/Poppins/Poppins-Bold.ttf'
import './assets/fonts/Open_Sans/OpenSans-Regular.ttf'
import './assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'
import './assets/fonts/Open_Sans/OpenSans-Bold.ttf'

import './App.scss'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
