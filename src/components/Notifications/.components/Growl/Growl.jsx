import React, { Component } from 'react';
import { GrowlMessage } from './GrowlMessage';
import DomHandler from './.tools/Utils/DomHandler';
import './Growl.css';

var messageIdx = 0;

export class Growl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    this.onClose = this.onClose.bind(this);
  }

  show(value) {
    if (value) {
      let newMessages;

      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          value[i].id = messageIdx++;
          newMessages = [...this.state.messages, ...value];
        }
      } else {
        value.id = messageIdx++;
        newMessages = this.state.messages ? [...this.state.messages, value] : [value];
      }

      this.setState({
        messages: newMessages
      });

      this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
    }
  }

  clear() {
    this.setState({
      messages: []
    });
  }

  onClose(message) {
    let newMessages = this.state.messages.filter(msg => msg.id !== message.id);
    this.setState({
      messages: newMessages
    });

    if (this.props.onRemove) {
      this.props.onRemove(message);
    }
  }

  render() {
    let className = ('p-growl p-component p-growl-' + this.props.position, this.props.className);

    return (
      <div
        ref={el => {
          this.container = el;
        }}
        id={this.props.id}
        className={className}
        style={this.props.style}>
        {this.state.messages.map(message => (
          <GrowlMessage message={message} onClick={this.props.onClick} onClose={this.onClose} />
        ))}
      </div>
    );
  }
}
