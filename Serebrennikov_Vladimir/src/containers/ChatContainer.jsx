import React, { Component } from "react";
import { Chat } from "../components/Chat/Chat.jsx"

export default class ChatContainer extends Component {

  state = {
    messages: {
      1: [
        { name: "Я из чата 1", text: "Как дела?" },
        { name: "Робот", text: "ОК. Как у тебя?", autoSender: true }
      ],
      2: [
        { name: "Я из чата 2", text: "Как дела?" },
        { name: "Робот", text: "ОК. Как у тебя?", autoSender: true }
      ],
      3: [
        { name: "Я из чата 3", text: "Как дела?" },
        { name: "Робот", text: "ОК. Как у тебя?", autoSender: true }
      ],
      4: []
    }
  };

  componentDidUpdate() {

    let { chatId } = this.props.match.params;
    
    if (chatId) {
      
      let chat = this.state.messages[ chatId ]  || [];
      let lengthChat = chat.length;

      if ( chat[lengthChat-1] && !chat[ lengthChat-1 ].autoSender ) {
        setTimeout(() =>
          this.setState({
            messages: {
              ...this.state,
              [chatId]: [
                ...this.state.messages[chatId],
                { name: "Робот", text: "Я здесь", autoSender: true }
              ]
            }
          }), 1000);
      }
    }
  }


  handleSubmit = (text) => {

    let { chatId } = this.props.match.params;

    this.setState({
      messages: {
        ...this.state,
        [chatId]: [
          ...this.state.messages[chatId],
          { name: "Я", text: text }
        ]
      }
    });
  }

  render() {

    let { chatId } = this.props.match.params;
    let currentChat = this.state.messages[chatId] || [];

    return (
      <Chat chatId={chatId} messages={currentChat} handleSubmit={this.handleSubmit}></Chat>
    )
  }
}