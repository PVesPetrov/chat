import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Homepage from '../Homepage';
import Login from '../Login';
import Signup from '../Signup';

import './Public.sass';

const Home = props => {
	return (
		<div className='app-home'>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
			</Switch>
		</div>
	);
};

Home.propTypes = {};

export default Home;
