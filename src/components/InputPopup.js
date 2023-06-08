// src/components/InputPopup.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../redux/actions';

function InputPopup() {
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(askQuestion(question));
    setQuestion('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default InputPopup;
