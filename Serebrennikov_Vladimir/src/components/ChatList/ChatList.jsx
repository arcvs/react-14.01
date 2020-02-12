import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './ChatList.css';

export const ChatList = ({chats, addChat}) => {

  const [chatName = '', setChatName] = useState()

  return (
    <div className='ChatList'>
      <List>
        {Object.keys(chats).map((id) =>
          <ListItem key={id} button>
            <Link underline="none" to={'/chats/' + id}>{chats[id].title}</Link>
          </ListItem >
        )}
      </List>

      <i>Новый чат</i>
      <input type="text" value={chatName} onChange={({target: {value}}) => setChatName(value)} />
      <IconButton aria-label="Add chat" onClick={ () => (addChat(chatName), setChatName()) }>
        <AddCircleIcon />
      </IconButton>
    </div>
  );
};