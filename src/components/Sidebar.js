// src/components/Sidebar.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addChatRoom } from '../redux/actions';

const experts = ["Warren Buffett", "Ray Dalio", "Janet Yellen", "Jack Bogle", "Howard Marks", "Paul Krugman", "Mohamed El-Erian", "Robert Shiller", "Suze Orman", "John Bogle"];

function Sidebar() {
  const dispatch = useDispatch();
  
  const handleClick = (expert) => {
    dispatch(addChatRoom(expert));
  }

  return (
    <div className="sidebar">
      {experts.map((expert, index) => (
        <button key={index} onClick={() => handleClick(expert)}>{expert}</button>
      ))}
    </div>
  );
}

export default Sidebar;
