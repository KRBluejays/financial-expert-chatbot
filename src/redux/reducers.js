// src/redux/reducers.js

const initialState = {
    chatRooms: [],
  };
  
  const chatRoomReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_CHAT_ROOM':
        return { 
          ...state, 
          chatRooms: [...state.chatRooms, { expert: action.expert, messages: [] }] 
        };
      case 'ADD_RESPONSES':
        return {
          ...state,
          chatRooms: state.chatRooms.map((room, i) => ({
            ...room,
            messages: [...room.messages, { text: action.responses[i], isExpert: true }],
          })),
        };
      default:
        return state;
    }
  };
  
  export default chatRoomReducer;
  