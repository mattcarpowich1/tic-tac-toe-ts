import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ActionTypes
} from '../../types';
import './NumberSelector.css';

const NumberSelector = ({ value } : { value : number }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ 
      type: ActionTypes.SET_BOARD_DIMENSION,
      dimension: value < 7 ? value + 1 : value
    })
  };

  const decrement = () => {
    dispatch({ 
      type: ActionTypes.SET_BOARD_DIMENSION,
      dimension: value > 2 ? value - 1 : value
    })
  };

  return (
    <div className="numberSelector">
      <h4>Board Size:</h4>
      <div className="numberSelectorBottom">
        <div className="left">
          {value}x{value}
        </div>
        <div className="right">
          <button onClick={increment}>
            +
          </button>
          <button onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  )
};

export default NumberSelector;
