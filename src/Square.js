import React from 'react';

const Square = ({value,onClick})=>  {
    return (
      <button
        className="square"
        onClick={(i)=>onClick(i)}>
        {value}
      </button>
    );
}

export default Square;