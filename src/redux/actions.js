// src/redux/actions.js

import axios from 'axios';

export const addChatRoom = (expert) => ({
  type: 'ADD_CHAT_ROOM',
  expert,
});

export const askQuestion = (question) => async (dispatch, getState) => {
    const { chatRooms } = getState();
    const expertResponses = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/ask`, {
      experts: chatRooms.map(room => room.expert),
      question,
    });
  
    dispatch({
      type: 'ADD_RESPONSES',
      responses: expertResponses.data,
    });
  };
