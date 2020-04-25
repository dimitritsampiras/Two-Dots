/**
 * @file Matrix.java
 * @author Dimitri Tsampiras
 * @description Generic Matrix Module
 * @date April 25, 2020
 */

 /**
  * Generic Matrix class
  */
class Matrix<T> {

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
	public validPoint(p: PointT): boolean {
		return this.validRow(p.y) && this.validCol(p.x);
	}
}