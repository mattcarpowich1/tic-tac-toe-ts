import {
  Board,
  GameState,
  Square
} from './types';

const X : Square = 'X';
const EMPTY : Square = '';

export const generateNewGameState = (newBoard: Board, boardDimension : number = 3) => {
  const BOARD_DIMENSION : number = boardDimension;
  // check horizontal connections
  for (let i = 0; i <= (BOARD_DIMENSION * (BOARD_DIMENSION - 1)); i += BOARD_DIMENSION) {
    if (newBoard[i] === EMPTY) {
      continue;
    }
    let connection : boolean = true;
    const base : Square = newBoard[i];
    for (let j = i; j < i + BOARD_DIMENSION; j++) {
      if (newBoard[j] !== base) {
        connection = false;
        break;
      }
    }
    if (connection) {
      if (base === X) {
        return GameState.X_WINS;
      }
      return GameState.O_WINS;
    }
  }
  // check vertical connections
  for (let i = 0; i < BOARD_DIMENSION; i += 1) {
    if (newBoard[i] === EMPTY) {
      continue;
    }
    let connection : boolean = true;
    const base : Square = newBoard[i];
    for (let j = i; j <= (BOARD_DIMENSION * (BOARD_DIMENSION - 1)) + i; j += BOARD_DIMENSION) {
      if (newBoard[j] !== base) {
        connection = false;
        break;
      }
    }
    if (connection) {
      if (base === X) {
        return GameState.X_WINS;
      }
      return GameState.O_WINS;
    }
  }
  // check diagonal connections
  // left to right diagonal
  const topLeftDiagonalBase : Square = newBoard[0];
  if (topLeftDiagonalBase) {
    let connection : boolean = true;
    for (let i = 0; i < BOARD_DIMENSION * BOARD_DIMENSION; i += BOARD_DIMENSION + 1) {
      if (newBoard[i] !== topLeftDiagonalBase) {
        connection = false;
        break;
      }
    }
    if (connection) {
      if (topLeftDiagonalBase === X) {
        return GameState.X_WINS;
      }
      return GameState.O_WINS;
    }
  }
  // right to left diagonal
  const topRightDiagonalBase : Square = newBoard[BOARD_DIMENSION - 1];
  if (topRightDiagonalBase) {
    let connection : boolean = true;
    for (let i = BOARD_DIMENSION - 1; i <= BOARD_DIMENSION * (BOARD_DIMENSION - 1); i += BOARD_DIMENSION - 1) {
      if (newBoard[i] !== topRightDiagonalBase) {
        connection = false;
        break;
      }
    }
    if (connection) {
      if (topRightDiagonalBase === X) {
        return GameState.X_WINS;
      }
      return GameState.O_WINS;
    }
  }
  // check for tie
  if (newBoard.includes(EMPTY)) {
    return GameState.IN_PROGRESS;
  }
  return GameState.TIE_GAME;
};
