import React from 'react';

const Message = ({ message, userName }) => {
  const isSentByUser = message.sender === userName;

  return (
    <div className={`message ${isSentByUser ? 'sent' : 'received'}`}>
      <p>{message.text}</p>
      <span className="time">{message.sender}</span>
    </div>
  );
};

export default Message;
