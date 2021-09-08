import React from 'react';
import Container from './Container/Container';
import Header from './Header/Header';
import GameZone from './GameZone/GameZone';
import './App.css';

function App() {

  return (
    <div className="App">
      <Container>
        <Header />
        <GameZone />
      </Container>
    </div>
  );
}

export default App;
