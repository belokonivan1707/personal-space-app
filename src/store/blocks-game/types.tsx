export interface BlocksGameState {
  score: number;
  randomSequence: any;
  time: number;
  colorChanged: boolean;
  userSequence: number[];
  difficult: number;
  moveCounter: number;
  win: null | boolean | any;
  userStep: number;
}
