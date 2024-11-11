const getTotalIsles = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
      return;
    }

    grid[r][c] = 'W';

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

module.exports = getTotalIsles;
