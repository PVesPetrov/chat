import React from 'react';
import PropTypes from 'prop-types';

import './SIdenav.sass';

const Sidenav = props => {
	return (
		<div className='app-sidenav'>
			{['Tommy', 'Sofia', 'Kalisto', 'Krum'].map(user => (
				<div key={user}>{user}</div>
			))}
		</div>
	);
};

Sidenav.propTypes = {};

export default Sidenav;
