import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import {
  Square,
  Board,
  ActionTypes,
  GameState
} from '../../types';
import './Board.css';

const GameBoard = () => {
  const boardDimension = useSelector((state : any) => state.game.boardDimension);
  const gameBoard : Board = useSelector((state : any) => state.game.board);
  const currentPlayer : Square = useSelector((state : any) => state.game.currentPlayer);
  const gameState : GameState = useSelector((state : any) => state.game.gameState);
  const dispatch = useDispatch();

  console.log(boardDimension);
  const chunkedBoard = _.chunk(gameBoard, boardDimension);

  console.log(chunkedBoard);

  const makeMove = (square: Square, index : number) => {
    if (square || gameState !== GameState.IN_PROGRESS) {
      return;
    }
    return dispatch({
      type: ActionTypes.MAKE_MOVE,
      index,
      value: currentPlayer
    });
  }

  return (
    <div className="gameBoard">
    {
      chunkedBoard.map((chunk : any, index: number) => (
        <div className="boardRow" key={index}>
          {
            chunk.map((square: Square, i: number) => (
              <button className={`square ${square}`} key={index} onClick={() => makeMove(square, (index * boardDimension + i))}>
                {
                  square && square
                }
              </button>
            ))
          }
        </div>
      ))
      }
    </div>
  );
};

export default GameBoard;
