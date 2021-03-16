import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CatPage from './components/CatPage.js';
import DogPage from './components/DogPage.js';
import RandomCatPage from './components/RandomCatPage.js';
import HomePage from './components/HomePage.js';

function App() {
	return (
		<Router>
			<div className='App'>
				<header>
					<ul>
						<li>
							<Link to='/'>
								<h1>home Page</h1>
							</Link>
						</li>
						<li>
							<Link to='/catPage'>
								<h1>Cat page</h1>
							</Link>
						</li>
						<li>
							<Link to='/dogPage'>
								<h1>Dog page</h1>
							</Link>
						</li>
						<li>
							<Link to='/randomCatPage'>
								<h1>Random Cat page</h1>
							</Link>
						</li>
					</ul>
				</header>
				<main>
					<Switch>
						<Route path='/catPage'>
							<CatPage></CatPage>
						</Route>
						<Route path='/dogPage'>
							<DogPage></DogPage>
						</Route>
						<Route path='/randomCatPage'>
							<RandomCatPage></RandomCatPage>
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
