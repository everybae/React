import React, { Component } from 'react';
import './App.css';

class Subject extends Component
{
  render()
  {
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class App extends Component
{
  render()
  {
    return(
    <div className="App">
      { alert('스크립트 창 입니다') }
        <Subject></Subject>
    </div>
    );
  }
}

export default App;
