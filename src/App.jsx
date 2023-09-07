import { useState } from 'react';
import './App.css';
import Contador from './Components/Contador';
import BtnLikes from './Components/BtnLikes';
import GetName from './Components/GetName';

function App() {
  let [likes, setLikes] = useState(0);
  
  let name = "";

  function setName(nombre){
    name = nombre;
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <Contador likes={likes}/>
      <BtnLikes callBack={() => setLikes(++likes)}/>
      <GetName callBack={(name) => setName(name)}></GetName>
    </div>
  );
}

export default App;
