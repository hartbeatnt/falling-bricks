const fallingBricks = (grid, hits) => {
  class Cell {
    constructor(row, col, val) {
      this.row = row;
      this.col = col;
      this.val = val;
    }
    
    erase() {
      this.val = 0;
    }
  }
  
  class Grid {
    constructor(grid) {
      this.cells = [];
      this.checked = new Map();

      this.getCell = this.getCell.bind(this);
      this.dropCell = this.dropCell.bind(this);
      this.getAdjacentCells = this.getAdjacentCells.bind(this);
      this.shouldDetach = this.shouldDetach.bind(this);
      this.check = this.check.bind(this);

      grid.forEach((row, i) => {
        this.cells.push([])
        row.forEach((val, j) => {
          this.cells[i][j] = new Cell(i, j, val)
        })
      })
    }

    getCell([row, col]) {
      return (this.cells[row] && this.cells[row][col])
        ? this.cells[row][col]
        : { val: 0 }
    }

    getAdjacentCells(cell) {
      return [
        [cell.row - 1, cell.col],
        [cell.row, cell.col - 1],
        [cell.row + 1, cell.col],
        [cell.row, cell.col + 1],
      ].map(this.getCell)
    }

    dropCell(cell) {
      let count = 0;
      this.checked = new Map();
      const recurse = cell => {
        cell.erase();
        this.getAdjacentCells(cell)
          .filter(cell => cell.val)
          .filter(this.shouldDetach)
          .forEach(cell => {
            if (!cell.val) return;
            count += 1;
            recurse(cell);
          })
      }
      recurse(cell, 0)
      return count;
    }

    shouldDetach(cell) {
      if (cell.row === 0) return false;
      return this.getAdjacentCells(cell)
        .filter(cell => cell.val && !this.checked.get(cell))
        .map(this.check)
        .every(this.shouldDetach);
    }

    check(cell) {
      this.checked.set(cell, true);
      return cell;
    }
  }

  grid = new Grid(grid)
  return hits.map(cell => {
    return grid.getCell(cell)
  }).map(grid.dropCell)
}

module.exports = fallingBricks;