import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    cells: Array(25),
    cols: 5,
    rows: 5
  };

  ReactDOM.render(<Board cols={props.cols} rows={props.rows} cells={props.cells} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
