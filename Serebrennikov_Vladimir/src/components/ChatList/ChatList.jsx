import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './ChatList.css';

export const ChatList = ({chats}) => (
  <div className='ChatList'>
    <List>
      {Object.keys(chats).map((id) => <ListItem key={id}> <Link to={'/chats/'+id}>{chats[id].title}</Link> </ListItem >)}
    </List>
  </div>
);
