import React, { useState } from 'react';
import Input from './components/Input';
import Items from './components/Items';
import './Container.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [items, setItems] = useState([]);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleClicked = () => {
    if (name.trim() === "") {
      alert("Please enter a name");
      return;
    }

    if (age.trim() === "") {
      alert("Please enter an age");
      return;
    }

    const parsedAge = parseInt(age, 10);

    if (isNaN(parsedAge) || parsedAge < 0) {
      alert("Please enter a valid, non-negative age");
      return;
    }

    const newItem = { name, age };
    setItems([...items, newItem]);
    setName(""); 
    setAge(""); 
  };

  return (
    <div className="custom-body">
      <div className="container">
        <Input
          handleName={handleName}
          handleAge={handleAge}
          onClick={handleClicked}
        />

        <Items items={items} />
      </div>
    </div>
  );
}

export default App;
