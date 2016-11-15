import React, { Component, PropTypes } from 'react';

import { Card, CardHeader, CardActions } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { _ } from 'underscore';

// Helpers
import { getTime } from '/imports/ui/getTime.js';

export default class Chat extends Component {

  deleteChat(chat) {
    const chats = this.state.chats;
    chats.splice(chats.indexOf(chat), 1);
    this.setState({ chats });
  }

  render() {
    const cardStyles = {
      marginBottom: 10,
    };
    const time = getTime(this.props.chat.lastMessage.timestamp);
    return (
      <Card
        style={cardStyles}
      >
        <CardHeader
          title={this.props.chat.name}
          subtitle={<p>{this.props.chat.lastMessage.text} <b>{time}</b></p>}
          avatar={this.props.chat.picture}
        />
        <CardActions>
         <FlatButton
           label="Delete Chat"
           onClick={() => this.props.deleteChat(this.props.chat)}
         />
         <FlatButton
           label="View"
           onClick={() => FlowRouter.go('chat', { chatId: this.props.chat._id })}
         />
      </CardActions>
      </Card>
    );
  }
}

Chat.propTypes = {
  chat: PropTypes.object.isRequired,
  deleteChat: PropTypes.func.isRequired,
};
