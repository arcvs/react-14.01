import React from "react";
import { Message } from '../Message/Message';
import PropTypes from 'prop-types';
import './MessageList.css';

export const MessageList = ({ messages }) => 
    (<div className='messageList'> 
        {messages.map ((message, index) => <Message {...message} key = { index } />)}
    </div>);

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}

// class MessageList extends Component {
//     state = {
//         messages: [
//             {name: "Kolya", content: "Hello!"},
//             {name: "Olya", content: "Hi! How are you?"},
//             {name: "Kolya", content: "I am well"}
//         ]
//     }
//     addMessage = (record) => {
//         const date = new Date ();
//         record.time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
//         this.setState (() => ({messages: this.state.messages.concat(record)}));
//     }
//     componentDidUpdate () {
//         const messages = this.state.messages;
//         const lastName = messages [messages.length - 1].name;
//         if (lastName != BOT_NAME) { // бот сам с собой болтать не будет)
//             const botReply = {name: BOT_NAME, content: lastName + ", робот не спит, он зорко бдит!"};
//             this.addMessage (botReply);
//         }
//     }
//     render () {
//         return <>
//             <ButtonSend onSend={ this.addMessage } />
//             { this.state.messages.map ((message, index) => <Message {...message} key = { index } />)}
//         </>
//     }
// }

// export {MessageList};