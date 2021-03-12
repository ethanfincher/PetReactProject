import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PetPage from './components/PetPage.js';
import HomePage from './components/HomePage.js'

function App() {
  return (
		<Router>
			<div className='App'>
				<header>
					<h1>
						<Link to='/'><h1>home Page</h1></Link>
					</h1>
					<h1>
						<Link to='/petPage'>
							<h1>pet page</h1>
						</Link>
					</h1>
				</header>
				<main>
					<Switch>
						<Route path='/PetPage'>
							<PetPage></PetPage>
						</Route>
						<Route path='/'>
							<HomePage></HomePage>
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
