import { AnyAction } from 'redux';
import {
  Square,
  Board,
  GameState,
  Game,
  ActionTypes
} from '../types';
import { generateNewGameState } from '../gameUtils';

const EMPTY : Square = '';
const X : Square = 'X';
const O : Square = 'O';

const emptyBoard : Board = [
  EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY,
  EMPTY, EMPTY, EMPTY
];

const initialState : Game = {
  currentPlayer: X,
  board: emptyBoard,
  gameState: GameState.NOT_STARTED,
  boardDimension: 3
};

const newGameState : Game = {
  currentPlayer: X,
  board: emptyBoard,
  gameState: GameState.IN_PROGRESS,
  boardDimension: 3
}

export const gameReducer = (state : Game = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.MAKE_MOVE:
      const {
        index,
        value
      } = action;
      const newBoard : Board = [
        ...state.board.slice(0, index),
        value,
        ...state.board.slice(index + 1)
      ];
      const gameState = generateNewGameState(newBoard, state.boardDimension);
      return {
        ...state,
        board: newBoard,
        gameState,
        currentPlayer: state.currentPlayer === X ? O : X
      };
    
    case ActionTypes.RESET_GAME:
      return {
        ...newGameState,
        board: new Array(state.boardDimension * state.boardDimension).fill(EMPTY),
        boardDimension: state.boardDimension
      };

    case ActionTypes.GO_HOME: 
      return initialState;

    case ActionTypes.SET_BOARD_DIMENSION:
      const { dimension } = action;
      return {
        ...state,
        boardDimension: dimension
      };

    default:
      return state
  }
}
