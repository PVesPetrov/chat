import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../actions';

import './App.sass';

const App = ({ counter, increase, decrease }) => (
	<div>
		<h2>React Boilerplate</h2>
		<h4>Here&#39;s a surfing dog!</h4>
		<p className='counter'>
			<button type='button' onClick={decrease}>
				-
			</button>
			<span>Counter: {counter}</span>
			<button type='button' onClick={increase}>
				+
			</button>
		</p>
		<img src='/dist/images/surfingdog.jpg' alt='Surfing Dog' />
	</div>
);

const mapStateToProps = state => ({
	counter: state.counter,
});

const mapDispatchToProps = {
	increase,
	decrease,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
