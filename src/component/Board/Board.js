import React, { Component } from 'react';
import Cell from '../Cell';

class Board extends Component {

  createCells = (row) => {
    const length = this.props.cols
    const array = Array(length).fill(null);
    const rowCol = row * length;

    const cols = array.map((cell, i) => 
      <Cell
        key={rowCol + i}
        value={this.props.cells[rowCol + i]}
        onClick={() => this.props.onClick(rowCol + i)}
      />
    );
    return cols;
  }

  createRows = () => {
    const length = this.props.rows;
    const array = Array(length).fill(null);
    const rows = array.map((row, i) => 
      <div className="board-row" key={i}>{this.createCells(i)}</div>)

    return rows;
  }

  render(){
    return(
      <div className="board">{this.createRows()}</div>
    );
  }

}

export default Board;