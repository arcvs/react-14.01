import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/Inbox';

import './HeaderMenu.css';

export const HeaderMenu = ({ leftMenu, rightMenu }) => (
  <div className='HeaderMenu'>
    <List>
      {leftMenu.map(({ title, href }, index) =>
        <ListItem key={index}>
          <Link to={href} className="HeaderMenu--link-left">{title}</Link>
        </ListItem >
      )}
    </List>
      
    <List>
      {rightMenu.map(({ title, href }, index) =>
        <ListItem key={index}>
          <Link to={href} className="HeaderMenu--link-right">{title}</Link>
        </ListItem >
      )}
    </List>
  </div>
);
