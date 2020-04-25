/**
 * @file GameBoardT.java
 * @description Game board class
 * @author Dimitri Tsampiras
 * @date April 25, 2020
 */


/**
 * GameBoardT
 * @detaisl extends Matrix class
 */
class GameBoardT extends Matrix<DotT> {

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
    let temp: Array<Array<DotT>> = [];

    // make copy of board
    for (let y = 0; y < this.height; y++) {
      temp.push([]);
      for (let x = 0; x < this.width; x++) {
        temp[y].push(this.get(new PointT(x,y)));
      }
    }

    for (let y = 0; y < this.height; y++) { 
      for (let x = 0; x < this.width; x++) {
        p = new PointT(x, y);
        if (p.isWithinDomain(this.domain(area))) {
          let {min, max} = this.range(area,x);
          q = new PointT(x, y - ((max - min) + 1));
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
  
}