import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, Button } from 'react-bootstrap';
import { sendMessage } from '../../../actions/socket';

import './InputMsg.sass';

const InputMsg = ({ sendMessage }) => {
	const [value, setValue] = useState('');
	const sendMssg = () => sendMessage(value);
	return (
		<div>
			<FormControl type='text' value={value} onChange={e => setValue(e.target.value)} />
			<Button onClick={() => sendMssg()}>Send</Button>
		</div>
	);
};

InputMsg.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	sendMessage,
};

export default connect(
	null,
	mapDispatchToProps,
)(InputMsg);
