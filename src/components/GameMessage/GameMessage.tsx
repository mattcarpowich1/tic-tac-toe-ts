import React from 'react';
import {
  GameState,
  Square
} from '../../types';
import './GameMessage.css';

const GameMessage = ({ currentPlayer, gameState } : { currentPlayer : Square, gameState : GameState }) => (
  <div className="message">
    {
      gameState === GameState.IN_PROGRESS && (
        `Player ${currentPlayer}'s Move!`
      )
    }
    {
      gameState === GameState.X_WINS && 'Player X Wins!'
    }
    {
      gameState === GameState.O_WINS && 'Player O Wins!'
    }
    {
      gameState === GameState.TIE_GAME && 'Tie Game!'
    }
  </div>
);

export default GameMessage;