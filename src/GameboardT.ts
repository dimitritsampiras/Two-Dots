/**
 * @file GameBoardT.java
 * @description Game board class
 * @author Dimitri Tsampiras
 * @date April 24
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
  
}