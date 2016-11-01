import Moment from 'moment';

import React, { Component, PropTypes } from 'react';

import { Card, CardHeader } from 'material-ui/Card';

import { _ } from 'underscore';

export default class Chat extends Component {
  getTime() {
    if (!this.props.chat.lastMessage.timestamp) return;

    return Moment(this.props.chat.lastMessage.timestamp).calendar(null, {
      lastDay : '[Yesterday]',
      sameDay : 'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY'
    });
  }

  deleteChat(chat) {
    const chats = this.state.chats;
    chats.splice(chats.indexOf(chat), 1);
    this.setState({ chats });
  }

  render() {
    const cardStyles = {
      marginBottom: 10,
    };
    return (
      <Card
        style={cardStyles}
      >
        <CardHeader
          title={this.props.chat.name}
          subtitle={<p>{this.props.chat.lastMessage.text} <b>{this.getTime()}</b></p>}
          avatar={this.props.chat.picture}
        />
      </Card>
    );
  }
}

Chat.propTypes = {
  chat: PropTypes.object.isRequired,
};
