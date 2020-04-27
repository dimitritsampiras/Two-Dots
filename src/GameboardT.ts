/**
 * @file GameBoardT.java
 * @description Game board class
 * @author Dimitri Tsampiras
 * @date April 25, 2020
 */

import { PointT } from "./PointT";
import { Matrix } from "./Matrix";
import { DotT } from "./DotT";

/**
 * GameBoardT
 * @detaisl extends Matrix class
 */
export class GameBoardT extends Matrix<DotT> {

  /**
   * @brief Constructor for Gamboard
   * @param g grid of DotT elements
   */
  public constructor(g: Array<Array<DotT>>) {
    super(g);
  }

  public updateBoard(area: Array<PointT>, elements: DotT[]): void {
    let p: PointT;
    let q: PointT;
    let temp: Array<Array<DotT>>;

    if (!this.validArea(area)) throw new Error("Invalid Point Sequence");

    temp = this.cloneBoard();

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        p = new PointT(x, y);
        if (p.isWithinDomain(this.domain(area))) {
          let { min, max } = this.range(area, x);
          q = new PointT(x, y - (max - min + 1));
          if (q.y >= 0) {
            if (y <= max) {
              this.set(p, temp[q.y][q.x]);
            }
          } else if (q.y < 0) {
            let rand = Math.floor(Math.random() * 4);
            if (y <= max) {
              this.set(p, elements[rand]);
            }
          }
        }
      }
    }
  }

  /**
   * Determines if sequence of PointT objects is valid based on position and type
   * @param area sequence of points
   * @return boolean based on validity of point sequence
   */
  public validArea(area: Array<PointT>): boolean {
    let d: DotT;

    if (area.length == 1 || area.length == 0) return false;

    d = this.get(area[0]);
    for (let i = 1; i < area.length; i++) {
      if (this.get(area[i]) != d) return false;
      if (!area[i].isAdjacent(area[i - 1])) return false;
    }
    return true;
  }

  /**
   * Clones Board
   * @return copy of board
   */
  private cloneBoard(): Array<Array<DotT>> {
    let c: Array<Array<DotT>> = [];
    for (let y = 0; y < this.height; y++) {
      c.push([]);
      for (let x = 0; x < this.width; x++) {
        c[y].push(this.get(new PointT(x, y)));
      }
    }
    return c;
  }
}
