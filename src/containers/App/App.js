import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';
import Sidenav from '../Sidenav';
import Chat from '../Chat';
import Home from '../Home';

import './App.sass';

const App = ({ isAuth }) => {
	return (
		<div className='app-container'>
			<Header />
			<main className='app-main'>
				{isAuth ? (
					<>
						<Sidenav />
						<Switch>
							<Route path='/:channel?' component={Chat} />
						</Switch>
					</>
				) : (
					<Home />
				)}
			</main>
		</div>
	);
};

App.propTypes = {
	isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	isAuth: true, // state.user.token,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
