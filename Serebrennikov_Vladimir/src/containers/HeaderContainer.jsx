import React, {Component} from "react";
import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu.jsx"

export default class HeaderContainer extends Component {
  state = {
    leftMenu: [
      {title: 'Главная', href: '/'},
      {title: 'Чаты', href: '/chats'}
    ],
    rightMenu: [
      {title: 'Профиль', href: '/profile'}
    ]
  };

  render() {
    return <HeaderMenu leftMenu={this.state.leftMenu} rightMenu={this.state.rightMenu} />
  }
}