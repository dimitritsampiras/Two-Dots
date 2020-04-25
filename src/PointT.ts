/**
 * @file PointT.java
 * @description Template module for a point on a 2D grid
 * @author Dimitri Tsampiras
 * @date April 24, 2020
 */

 /**
  * PointT class
  */
class PointT {
  readonly x: number;
  readonly y: number;

  /**
	 * @brief Constructor for DoT Class
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
  public isWithinDomain(d: {min: number, max: number}): boolean {
		return this.x >= d.min && this.x <= d.max;
	}
  
  /**
   * Determines if reference point is withint range
   * @param r object representing range
   */
	public isWithinRange(r: {min: number, max: number}): boolean {
		return this.y >= r.min && this.y <= r.max;
	}
  
}