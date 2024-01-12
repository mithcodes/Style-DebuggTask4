import React from 'react';
import './Input.css';

const Input = ({ handleName, handleAge, onClick }) => {
  return (
    <div className="Input-container">
      <div className="row row1 m-2">
        <input
          type="text"
          className="form-control"
          placeholder="enter your name"
          onChange={handleName}
        />
      </div>
      <div className="row row1 m-2">
        <input
          type="number"
          className="form-control"
          placeholder="please enter your age"
          onChange={handleAge}
        />
      </div>
      <div className="row m-2">
        <div className="col-4 btn btn-danger" onClick={onClick}>
          Add
        </div>
      </div>
    </div>
  );
}

export default Input;