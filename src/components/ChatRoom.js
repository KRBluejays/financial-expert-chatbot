// src/components/ChatRoom.js

import React from 'react';

function ChatRoom({ expert }) {
  return (
    <div className="chat-room">
      <h2>{expert}</h2>
      {/* The messages will go here */}
    </div>
  );
}

export default ChatRoom;
