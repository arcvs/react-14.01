import React from "react";
import ReactDom from "react-dom";
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired
    };
 
    render() {
        const robotMessage = cn({
            'message': true,
            'messageRobot': this.props.sender === 'robot',
          });

        return <div className={robotMessage}>
                    <div>{ this.props.text }</div>
                    <div className="message-sender">{ this.props.sender }</div>
               </div>

    }
 }
 

