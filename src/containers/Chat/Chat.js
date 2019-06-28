import React from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages';
import InputMsg from './InputMsg';

import './Chat.sass';

const Chat = props => {
	return (
		<div className='chat'>
			<div className='chat-messages'>
				<Messages />
			</div>
			<div className='chat-input'>
				<InputMsg />
			</div>
		</div>
	);
};

Chat.propTypes = {};

export default Chat;
