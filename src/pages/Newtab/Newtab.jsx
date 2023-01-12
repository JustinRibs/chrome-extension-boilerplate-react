import React from 'react';
import { useState } from 'react';
import smiley from '../../assets/img/smiley.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);
  const [list, setList] = useState([]);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    setUpdated(message);
    setList((oldList) => [...oldList, message]);
  };
  return (
    <div>
      <h2> To do List:</h2>
      <img src={smiley} className="App-logo" alt="logo" />
      <br></br>
      <hr></hr>

      <ol>
        {list.map((task) => {
          return <li>{task}</li>;
        })}
      </ol>

      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
      ></input>
      <p>
        {' '}
        Keep typing that task! We believe in you! <br></br>Task to be added:
        {message}
      </p>
      <button onClick={handleClick}>
        {' '}
        Submit your task to the Almighty List
      </button>
    </div>
  );
};

export default Newtab;
