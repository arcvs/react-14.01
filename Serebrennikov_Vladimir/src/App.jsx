import React, {Component} from "react";
import HeaderContainer from "./containers/HeaderContainer.jsx";
import ChatContainer from "./containers/ChatContainer.jsx";
import ChatsListContainer from "./containers/ChatsListContainer.jsx";
// import { Profile } from "./components/Profile/Profile.jsx";
import { MainPage } from "./components/MainPage/MainPage.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./style/App.css"

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          <div className="App-content">
          <Route path="/chats" component= {ChatsListContainer} />
          <Switch>
            <Route path="/chats" exact component={ChatContainer} />
            <Route path="/chats/:chatId" exact component={ChatContainer} />
            {/* <Route path="/profile" exact component={Profile} /> */}
            <Route path="/" exact component={MainPage} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}