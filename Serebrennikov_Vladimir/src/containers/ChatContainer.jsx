import React, {Component} from "react";
import MessageSender from "../components/MessageSender/MessageSender.jsx"
import {MessageField} from "../components/MessageField/MessageField.jsx"

export default class ChatContainer extends Component {
  
  state = {
    messages: {
      1: [
        {name: "Я из чата 1", text: "Как дела?"},
        {name: "Робот", text: "ОК. Как у тебя?", sender: "bot"}
      ],
      2: [
        {name: "Я из чата 2", text: "Как дела?"},
        {name: "Робот", text: "ОК. Как у тебя?", sender: "bot"}
      ],
      3: [
        {name: "Я из чата 3", text: "Как дела?"},
        {name: "Робот", text: "ОК. Как у тебя?", sender: "bot"}
      ]
    }
  };
X
  componentDidUpdate() {

    let { chatId } = this.props.match.params;
    let chat = this.state.messages[chatId];
    
    let lengthChat = chat.length;
    console.log(chat[ lengthChat - 1 ].sender !== "bot")

    if (chat[ lengthChat - 1 ].sender !== "bot") {
      setTimeout(() => 
        this.setState({
          messages: {
            ...this.state.messages,
            [chatId]: [
              ...this.state.messages[chatId],
              {name: "Робот", text: "Я здесь", sender: "bot"}
            ]
          }
        }), 1000);
    }
  }

  
  handleSubmit = (text) => {

    let { chatId } = this.props.match.params;

    this.setState({
      messages: {
        ...this.state.messages,
        [chatId]: [
          ...this.state.messages[chatId],
          {name: "Я", text: text}
        ]
      }
    });
  }

  render() {

    let { chatId } = this.props.match.params;
    let currentChat = this.state.messages[chatId];


    return (
      <div>
        <MessageField messages={currentChat} />
        <MessageSender handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}