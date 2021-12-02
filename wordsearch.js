const wordSearch = (letters, word) => {
  // Result boolean to track if the word is found
  let res = false;

  // Function to transpose the rows and columns to be able to use .map() and .join()
  const transpose = function(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let col = [];
      for (let j = 0; j < matrix.length; j++) {
        col.push(matrix[j][i]);
      }
      result.push(col);
    }
    return result;
  };

  // Create a string from the array that can be searched
  const horizontalJoin = letters.map(ls => ls.join(''));
  // Search each row for the word
  for (let l of horizontalJoin) {
    if (l.includes(word)) res = true;
  }

  // Transpose the original matrix
  const matrix = transpose(letters);
  // Create a string from the array that can be searched
  const verticalJoin = matrix.map(ls => ls.join(''));
  // Search each transposed column (row) for the word
  for (let l of verticalJoin) {
    if (l.includes(word)) res = true;
  }
  // Return the result value
  return res;
};

module.exports = wordSearch;