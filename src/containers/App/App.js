import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import Public from '../Public';
import Private from '../Private';
import Error from '../../components/Error';

import './App.sass';

const App = ({ isAuth }) => {
	return (
		<div className='app-container'>
			<Header />
			<main className='app-main'>
				<Error />
				{isAuth ? <Private /> : <Public />}
			</main>
		</div>
	);
};

App.propTypes = {
	isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	isAuth: !!state.login.user.token,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
