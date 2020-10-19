import React from 'react';

const Cell = props => {
  return (
    <button className="board-cell" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Cell;