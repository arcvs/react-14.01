import React, {Component} from "react";
import HeaderContainer from "./containers/HeaderContainer.jsx"
import ChatContainer from "./containers/ChatContainer.jsx"
import ChatsListContainer from "./containers/ChatsListContainer.jsx"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css"

export default class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
          <div className='App'>
            <HeaderContainer></HeaderContainer>
            <div className='App-ChatsField'>
              <ChatsListContainer></ChatsListContainer>
              <Switch>
                <Route path="/chats/" exact component={ChatContainer} />
                <Route path="/chats/:chatId" exact component={ChatContainer} />
                <Route path="/about">It's about</Route>
                <Route path="/">It's 404 вот так вот</Route>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      )
  }
}