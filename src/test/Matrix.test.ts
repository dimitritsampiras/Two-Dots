import { Matrix } from '../Matrix'
import { DotT } from '../DotT';
import { PointT } from '../PointT';

const board: Array<Array<number>> = [
  [ 2, 3, 4, 2, 1 ],
  [ 2, 1, 5, 2, 1 ],
  [ 2, 2, 1, 5, 1 ],
  [ 5, 1, 1, 2, 3 ],
  [ 3, 4, 3, 3, 2 ]
];

const M: Matrix<number> = new Matrix(board);
const a1: Array<PointT> = [
  new PointT(0,0),
  new PointT(0,1),
  new PointT(0,2),
  new PointT(1,2)
];

const a2: Array<PointT> = [
  new PointT(0,0),
  new PointT(1,1),
  new PointT(3,2),
  new PointT(4,4)
];

test("Get a point from Matrix - Regular case", () => {
  expect(M.get(new PointT(0,0))).toBe(2);
});


test("Get a point from Matrix - Error", () => {
  expect(() => M.get(new PointT(10,0))).toThrowError("Invalid point");
  expect(() => M.get(new PointT(0,10))).toThrowError("Invalid point");
});

test("Set a point - Regular case", () => {
  M.set(new PointT(0,0), 5);
  expect(M.get(new PointT(0,0))).toBe(5);
});

test("Get a point from Matrix - Error", () => {
  expect(() => M.set(new PointT(10,0), 10)).toThrowError("Invalid point");
});

test("Domain of area - Regular case", () => {
  expect(M.domain(a1)).toStrictEqual({min: 0, max: 1});
  expect(M.domain(a2)).toStrictEqual({min: 0, max: 4});
});

test("Domain of area in one column - Regular case", () => {
  expect(M.domain(a1, 1)).toStrictEqual({min: 0, max: 0});
  expect(M.domain(a2, 4)).toStrictEqual({min: 4, max: 4});
});

test("Range of area - Regular case", () => {
  expect(M.range(a1)).toStrictEqual({min: 0, max: 2});
  expect(M.range(a2)).toStrictEqual({min: 0, max: 4});
});

test("Range of area in one column - Regular case", () => {
  expect(M.range(a1, 1)).toStrictEqual({min: 2, max: 2});
  expect(M.range(a2, 1)).toStrictEqual({min: 1, max: 1});
});