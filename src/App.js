import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/Home';
import DepositePage from './pages/Deposite';
import WithdrawPage from './pages/Withdraw';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<ul className="ul-style">
						<li className="li-style">
							<NavLink to="/" className="App-link">Home</NavLink>
						</li>
						<li className="li-style">
							<NavLink to="/deposite" className="App-link">Deposit</NavLink>
						</li>
						<li className="li-style">
							<NavLink to="withdraw" className="App-link">Withdraw</NavLink>
						</li>
					</ul>
					<Route path="/" exact component={HomePage} />
					<Route path="/deposite" exact component={DepositePage} />
					<Route path="/withdraw" exact component={WithdrawPage} />
				</header>
			</div>
		</BrowserRouter>
	);
}

export default App;
