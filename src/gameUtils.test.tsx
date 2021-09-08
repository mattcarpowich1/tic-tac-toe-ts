import {
  Board,
  Square,
  GameState
} from './types';
import { generateNewGameState } from './gameUtils';

const X : Square = 'X';
const O : Square = 'O';
const EMPTY : Square = '';

const xWin2Horizontal : Board = [
  X, X,
  O, EMPTY
];

test('Horizontal win determined on 2x2', () => {
  expect(generateNewGameState(xWin2Horizontal, 2)).toBe(GameState.X_WINS);
});

const oWin2Vertical : Board = [
  X, O,
  EMPTY, O
];

test('Vertical win determined on 2x2', () => {
  expect(generateNewGameState(oWin2Vertical, 2)).toBe(GameState.O_WINS);
})

const xWinTopLeftDiagonal2 : Board = [
  X, O,
  EMPTY, X
];

test('Top left diagonal win on 2x2', () => {
  expect(generateNewGameState(xWinTopLeftDiagonal2, 2)).toBe(GameState.X_WINS);
});

const oWinTopRightDiagonal2 : Board = [
  X, O,
  O, EMPTY
];

test('Top right diagonal win on 2x2', () => {
  expect(generateNewGameState(oWinTopRightDiagonal2, 2)).toBe(GameState.O_WINS);
});

const bigEmptyBoard4 : Board = new Array(16).fill(EMPTY);

test ('Empty board returns in progress', () => {
  expect(generateNewGameState(bigEmptyBoard4, 4)).toBe(GameState.IN_PROGRESS);
});

const tie3 : Board = [
  X, O, O,
  O, X, X,
  X, X, O
];

test ('Tie board', () => {
  expect(generateNewGameState(tie3)).toBe(GameState.TIE_GAME);
});

const xWin8 : Board = [
  X, X, O, O, X, X, O, O,
  X, X, O, O, X, X, O, O,
  O, O, X, X, O, O, X, X,
  X, X, O, X, X, O, X, O,
  X, X, O, O, X, X, O, O,
  X, X, O, O, X, X, O, O,
  X, X, O, O, O, X, X, O,
  X, X, O, O, O, X, O, X
];

test ('8x8 x wins diagonal', () => {
  expect(generateNewGameState(xWin8)).toBe(GameState.X_WINS);
});
