import { PointT } from "../PointT";
import { Interval } from "../Interval";

const p1: PointT = new PointT(5, 5);
const p2: PointT = new PointT(4, 4);
const p3: PointT = new PointT(4, 5);

const d1: Interval = { min: 3, max: 5 };
const d2: Interval = { min: 1, max: 2 };


test("Is PointT within Domain?", () => {
  expect(p1.isWithinDomain(d1)).toBe(true);
  expect(p2.isWithinDomain(d1)).toBe(true);
  expect(p3.isWithinDomain(d2)).toBe(false);
});

test("Is PointT within Range?", () => {
  expect(p1.isWithinDomain(d1)).toBe(true);
  expect(p2.isWithinDomain(d1)).toBe(true);
  expect(p3.isWithinDomain(d2)).toBe(false);
});

test("Is Point adjacent to another Point?", () => {
  expect(p1.isAdjacent(p3)).toBe(true);
  expect(p2.isAdjacent(p2)).toBe(false);
  expect(p1.isAdjacent(p1)).toBe(false);
})



