import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  GameState,
  Square,
  ActionTypes
} from '../../types';
import NumberSelector from '../NumberSelector/NumberSelector';
import Board from '../Board/Board';
import GameMessage from '../GameMessage/GameMessage';
import './GameZone.css';

const GameZone = () => {

  const dispatch = useDispatch();
  const gameState : GameState = useSelector((state: any) => state.game.gameState);
  const currentPlayer : Square = useSelector((state : any) => state.game.currentPlayer);
  const boardDimension : number = useSelector((state : any) => state.game.boardDimension);

  const startGame = () => {
    dispatch({
      type: ActionTypes.RESET_GAME
    });
  }

  return (
    <div className="zone">
      {
        gameState === GameState.NOT_STARTED ? (
          <>
            <button 
              className="actionButton"
              onClick={startGame}
            >
              Begin Multiplayer Game
            </button>
            <NumberSelector value={boardDimension} />
          </>
        ) : (
          <>
            <div className="gameActionButtons">
              <button 
                className="actionButtonSmallAbsolute"
                onClick={() => dispatch({type: ActionTypes.RESET_GAME})}
              >
                Reset Game
              </button>
              <button 
                className="actionButtonSmallAbsolute"
                onClick={() => dispatch({type: ActionTypes.GO_HOME})}
              >
                Home
              </button>
            </div>
            <GameMessage
              currentPlayer={currentPlayer}
              gameState={gameState}
            />
            <Board />
          </>
        )
      }
    </div>
  );
};

export default GameZone;