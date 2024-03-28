import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Middle from './component/Middle';
import './App.css';

function App(){

  return(
    <div className='App'>
      <Header />
      <Middle />
      <Body />
    </div>
  );
}


export default App;