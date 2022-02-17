// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value , setValue] = useState()
  const [name , setName] = useState([])

  return (
    <div className="App">

      <input type="text" onChange={(e) => setValue(e.target.value) } />
      <button onClick={ () => setName( [...name,value] ) } > persone name : {value} </button>
      <ul>
        {name.map(el => <li>{el} { <button>suprimer</button> } </li> )}
      </ul>
    </div>
  );
}

export default App;
