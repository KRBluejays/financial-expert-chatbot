// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Sidebar />
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;
