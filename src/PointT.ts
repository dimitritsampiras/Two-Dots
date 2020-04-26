/**
 * @file PointT.ts
 * @description Template module for a point on a 2D grid
 * @author Dimitri Tsampiras
 * @date April 24, 2020
 */

import { Interval } from "./Interval"

 /**
  * PointT class
  */
export class PointT {
  readonly x: number;
  readonly y: number;

  /**
	 * Constructor for PointT Class
	 * @param xc x coordinate
	 * @param yc y coordinate
	 */
	public constructor(xc: number, yc: number) {
		this.x = xc;
		this.y = yc;
  }

  /**
   * Determines if reference point is within domain
   * @param d object representing domain
   */
  public isWithinDomain(d: Interval): boolean {
		return this.x >= d.min && this.x <= d.max;
	}
  
  /**
   * Determines if reference point is withint range
   * @param r object representing range
   */
	public isWithinRange(r:  Interval): boolean {
		return this.y >= r.min && this.y <= r.max;
  }
  
  /**
	 * Method to check if a pair of coordinates are adjacent to reference coordinate
	 * @param p external PointT object
	 * @return boolean based of adjacency of external coordinate
	 */
	public isAdjacent(p: PointT): boolean {
		if (p.y == this.y && Math.abs(p.x - this.x) == 1)
			return true;
		if (p.x == this.x && Math.abs(p.y - this.y) == 1)
			return true;
		return false;
	}
  
}

