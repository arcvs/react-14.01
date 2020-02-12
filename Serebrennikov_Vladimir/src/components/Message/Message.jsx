import React from "react";
import './Message.css';

export const Message = ({name, text, autoSender}) => (
  <p className={ autoSender ? 'Message-left' : 'Message-right' }>
    <strong>{name}:</strong> {text}
  </p>
);