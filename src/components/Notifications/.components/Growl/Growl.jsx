import React, { forwardRef, useState } from 'react';

import './Growl.css';

import { GrowlMessage } from './.components/GrowlMessage';

import { GrowlUtils } from './.tools/Utils/GrowlUtils';

export const Growl = forwardRef(({ baseZIndex, className, id, onClick, onRemove, position, style }, ref) => {
  const [messages, setMessages] = useState([]);

  let classNames = ('p-growl p-component p-growl-' + position, className);
  let messageIdx = 0;

  const onClose = message => {
    let newMessages = messages.filter(msg => msg.id !== message.id);
    setMessages(newMessages);
    if (onRemove) {
      onRemove(message);
    }
  };

  if (ref.current !== null) {
    ref.current.onShow = value => {
      if (value) {
        let newMessages;
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            value[i].id = messageIdx++;
            newMessages = [...messages, ...value];
          }
        } else {
          value.id = messageIdx++;
          newMessages = messages ? [...messages, value] : [value];
        }
        setMessages(newMessages);
        ref.current.style.zIndex = String(baseZIndex + GrowlUtils.generateZIndex());
      }
    };

    ref.current.onClear = () => {
      setState([]);
    };
  }

  return (
    <div ref={ref} id={id} className={classNames} style={style}>
      {messages.map(message => (
        <GrowlMessage message={message} onClickEvent={onClick} onCloseEvent={onClose} />
      ))}
    </div>
  );
});
