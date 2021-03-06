/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let i;
  for ( i = 1; i <= preferences.length; i++) {
    if (preferences[preferences[preferences[i-1]-1]-1] == i && i != preferences[i-1]) {
      count++;
    }    
  }
    return count/3;
};
