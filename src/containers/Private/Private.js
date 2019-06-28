import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from '../Sidenav';
import Chat from '../Chat';

const Private = props => {
	return (
		<>
			<SideNav />
			<Switch>
				<Route path='/:channel?' component={Chat} />
			</Switch>
		</>
	);
};

Private.propTypes = {};

export default Private;
