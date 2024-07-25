import React from 'react';
import './App.css';
import Card from './Card';
import data from './data';

function App() {
  return (
    <>
      <Card items={data} />
    </>
  );
}

export default App;
