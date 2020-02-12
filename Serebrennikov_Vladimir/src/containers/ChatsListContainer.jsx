import React, { Component } from "react";
import { ChatList } from "../components/ChatList/ChatList.jsx"

export default class ChatsListContainer extends Component {

  state = {
    chats: {
      1: { title: 'О жизни', messageList: 1 },
      2: { title: 'Философия', messageList: 2 },
      3: { title: 'JavaScript', messageList: 3 },
    }
  };

  addChat = (nameChat) => {

    if (nameChat) {

      let numNewChats = Object.keys(this.state.chats).length + 1;
  
      this.setState({
        ...this.state,
        chats: {
          ...this.state.chats,
          [numNewChats]: {title: nameChat, messageList: numNewChats}
        }
      });
    }
  }

  render() {
    return <ChatList chats={this.state.chats} addChat={this.addChat} />
  }
}