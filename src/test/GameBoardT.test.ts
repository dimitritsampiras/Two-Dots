import { GameBoardT } from '../GameBoardT';
import { DotT } from '../DotT';

let r: DotT = "Red";
let b: DotT = "Blue";
let g: DotT = "Green";
let o: DotT = "Orange"

const a: Array<Array<DotT>> = [
  [ r ]
]
const G: GameBoardT = new GameBoardT(a);

