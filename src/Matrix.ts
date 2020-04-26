/**
 * @file Matrix.java
 * @description Generic Matrix Module
 * @author Dimitri Tsampiras
 * @date April 25, 2020
 */

import { PointT } from "./PointT";
import { Interval } from "./Interval"

 /**
  * Generic Matrix class
  */
export class Matrix<T> {

  readonly width: number;
  readonly height: number;
  private m: Array<Array<T>>;

  /**
	 * Constructor for Matrix class
	 * @param M Array of Array of generic element
	 */
  public constructor(M: Array<Array<T>>) {
    if (!M.length) 
      throw new Error("Illegal Argument: Grid is empty");
    if (!M[0].length) 
      throw new Error("Illegal Argument: Grid is empty");
    this.width = M.length;
    this.height = M[0].length;
    this.m = M;
  }

  /**
	 * Gets the element at point p
	 * @param p PointT object
	 * @return element T at point p
	 */
  public get(p: PointT) : T {
    return this.m[p.y][p.x];
  }

  /**
	 * Sets the coordinate to a value
	 * @param x matrix coordinate x
	 * @param y matrix coordinate y
	 * @param t generic value
	 */
	public set(p: PointT, t: T): void {
		if (!this.validPoint(p))
			throw new Error("Invalid point");
		this.m[p.y][p.x] = t;
  }

  /**
   * Determines the domain of values on the grid of a specified area
   * @param area sub area of matrix
   * @param row restricts range of just one column - optional
	 * @return the domain [min, max] in the sub area
   */
  public domain(area: Array<PointT>, row?: number): Interval {
    let d: Interval = {
      min: this.width,
      max: 0
    }
    
    for (let p of area) {
      if (!row) {
        if (p.y < d.min) d.min = p.y;
        if (p.y > d.max) d.max = p.y;
      } else if (row && p.x == row) {
        if (p.y < d.min) d.min = p.y;
        if (p.y > d.max) d.max = p.y;
      }
    }
    
    return d;
  }

  
  /**
   * Determines the range of values on the grid of a specified area
   * @param area sub area of matrix
   * @param column restricts range of just one column - optional
	 * @return the range (min, max) in the sub area
   */
  public range(area: Array<PointT>, column?: number): Interval {
    let r: Interval = {
      min: this.height,
      max: 0
    }
    
    for (let p of area) {
      if (!column) {
        if (p.y < r.min) r.min = p.y;
        if (p.y > r.max) r.max = p.y;
      } else if (column && p.x == column) {
        if (p.y < r.min) r.min = p.y;
        if (p.y > r.max) r.max = p.y;
      }
    }

    return r;
  }

  /**
	 * Determines if a given index is a valid row number
	 * @return true if i is a valid row number, false otherwise
	 */
	private validRow(i: number): boolean {
		return i >= 0 && i <= this.height - 1;
	}

	/**
	 * Determines if a given index is a valid column number
	 * @return true if j is a valid column number, false otherwise
	 */
	private validCol(j: number): boolean {
		return j >= 0 && j <= this.width - 1;
	}

	/**
	 * Determines if a given point is valid within the grid
	 * @return true if point p is a valid point, false otherwise
	 */
	private validPoint(p: PointT): boolean {
		return this.validRow(p.y) && this.validCol(p.x);
	}
}
