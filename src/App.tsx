import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Main />
    </>
  );
}

export default App;
