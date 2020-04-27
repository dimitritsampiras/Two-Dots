import { GameBoardT } from '../GameBoardT';
import { DotT } from '../DotT';
import { PointT } from '../PointT';

const r: DotT = "R";
const b: DotT = "B";
const g: DotT = "G";
const o: DotT = "O";
const p: DotT = "P";
const seq: Array<DotT> = ["G", "G", "G", "G"];

const board: Array<Array<DotT>> = [
  [ r, g, o, o, g ],
  [ r, p, o, b, b ],
  [ r, r, p, g, g ],
  [ p, g, o, o, r ],
  [ b, b, g, p, r ]
];

const G: GameBoardT = new GameBoardT(board);
const a1: Array<PointT> = [
  new PointT(0,0),
  new PointT(0,1),
  new PointT(0,2),
  new PointT(1,2)
];

const a2 = a1.slice();
const a3 = a1.slice();
const a4 = a1.slice(0,1);
a2[2] = new PointT(3,3);
a3[3] = new PointT(0,3);


test("Valid point sequence - Regular case", () => {
  expect(G.validArea(a1)).toBe(true);
});

test("Valid point sequence - Not adjacent", () => {
  expect(G.validArea(a2)).toBe(false);
});

test("Valid point sequence - Incorrect Dot", () => {
  expect(G.validArea(a3)).toBe(false);
});

test("Valid point sequence - Edge case", () => {
  expect(G.validArea(a4)).toBe(false);
});

test("Update Board", () => {
  G.updateBoard(a1, seq);
  expect(G).toEqual(new GameBoardT(
    [[ g, g, o, o, g ],
     [ g, g, o, b, b ],
     [ g, p, p, g, g ],
     [ p, g, o, o, r ],
     [ b, b, g, p, r ]]
  ));
  
  G.updateBoard([new PointT(4,4), new PointT(4,3) ], seq);
  expect(G).toEqual(new GameBoardT(
    [[ g, g, o, o, g ],
     [ g, g, o, b, g ],
     [ g, p, p, g, g ],
     [ p, g, o, o, b ],
     [ b, b, g, p, g ]]
  ));

  G.updateBoard([new PointT(2,3), new PointT(3,3) ], seq);
  expect(G).toEqual(new GameBoardT(
    [[ g, g, g, g, g ],
     [ g, g, o, o, g ],
     [ g, p, o, b, g ],
     [ p, g, p, g, b ],
     [ b, b, g, p, g ]]
  ))
})
