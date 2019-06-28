import React from 'react';
import PropTypes from 'prop-types';

import './Header.sass';

const Header = props => {
	return (
		<header className='app-header'>
			<div>Logo</div>
			<div>Navigation</div>
		</header>
	);
};

Header.propTypes = {};

export default Header;
