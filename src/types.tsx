export type Square = 'X' | 'O' | '';

export type Board = Square[];

export enum GameState {
  NOT_STARTED = 'NOT STARTED',
  IN_PROGRESS = 'IN PROGRESS',
  TIE_GAME = 'TIE GAME',
  X_WINS = 'X WINS',
  O_WINS = 'O WINS'
};

export type Game = {
  currentPlayer: 'X' | 'O',
  board: Board,
  gameState: GameState,
  boardDimension: number
};

export enum ActionTypes {
  MAKE_MOVE = 'MAKE MOVE',
  RESET_GAME = 'RESET GAME',
  GO_HOME = 'GO HOME',
  SET_BOARD_DIMENSION = 'SET BOARD DIMENSION'
};
