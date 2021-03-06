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
					<ul className='navBar'>
						<li className='navUnit'>
							<Link to='/'>
								<h1>Home Page</h1>
							</Link>
						</li>
						<li className='navUnit'>
							<Link to='/catPage'>
								<h1>Cat Info</h1>
							</Link>
						</li>
						<li className='navUnit'>
							<Link to='/dogPage'>
								<h1>Dog Info</h1>
							</Link>
						</li>
						<li className='navUnit'>
							<Link to='/randomCatPage'>
								<h1>Random Cats</h1>
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
