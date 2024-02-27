import React, { useState } from 'react';

function RadioOptions({handleOptionChange, selectedOption}) {
  return (
    <div className="Radio-Options">
      <input
        type="radio"
        id="multiply"
        name="options"
        value="multiply"
        checked={selectedOption === 'multiply'}
        onChange={handleOptionChange}
      />
      <label htmlFor="option1">multiply</label><br />

      <input
        type="radio"
        id="add"
        name="options"
        value="add"
        checked={selectedOption === 'add'}
        onChange={handleOptionChange}
      />
      <label htmlFor="option2">add</label><br />

      <input
        type="radio"
        id="subtract"
        name="options"
        value="subtract"
        checked={selectedOption === 'subtract'}
        onChange={handleOptionChange}
      />
      <label htmlFor="option3">subtract</label><br />
    </div>
  );
}

export default RadioOptions;