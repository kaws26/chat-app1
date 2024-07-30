import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import Message from './Message';

const Chat = ({ userName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (newMessage.trim()) {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        sender: userName,
        timestamp: new Date()
      });
      setNewMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="chat-box">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} userName={userName} />
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
