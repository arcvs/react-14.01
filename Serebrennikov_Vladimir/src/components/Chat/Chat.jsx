import React from 'react';
import { MessageField } from '../MessageField/MessageField.jsx'
import MessageSender from '../MessageSender/MessageSender.jsx'
import './Chat.css';

export const Chat = ({ chatId, messages, handleSubmit }) => {
	console.log(chatId)
	if (chatId) {
		return (<div className="Chat">
			<MessageField messages={messages} />
			<MessageSender handleSubmit={handleSubmit} />
		</div>);
	} else {
		return <div className="Chat"><p>Для общения выберите чат</p></div>
	}
}