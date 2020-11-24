import React from 'react'
import IndexPage from './Pages/index.js'
import PageNotFound from './Pages/404.js'
import Telegram from './Pages/telegram.js'
import { Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'


const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<IndexPage />
				</Route>
				<Route>
					<Telegram />
				</Route>
				<Route>
					<PageNotFound />
				</Route>
			</Switch>
		</>
	)
}

export default App
