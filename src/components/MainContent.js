// src/components/MainContent.js

import React from 'react';
import { useSelector } from 'react-redux';
import ChatRoom from './ChatRoom';
import InputPopup from './InputPopup';

function MainContent() {
  const chatRooms = useSelector(state => state.chatRooms);

  return (
    <div className="main-content">
      {chatRooms.map((room, index) => (
        <ChatRoom key={index} expert={room.expert} />
      ))}
      {chatRooms.length === 4 && <InputPopup />}
    </div>
  );
}

export default MainContent;

