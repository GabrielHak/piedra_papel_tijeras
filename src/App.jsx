import { useState } from 'react';
import './App.css';
import Contador from './Components/Contador';
import BtnLikes from './Components/BtnLikes';
import GetName from './Components/GetName';

function App() {
  let [likes, setLikes] = useState(0);
  
  let [nombre, setNombre] = useState("");

  return (
    <div className="App">
      <h1>Mi nombre es: {nombre}</h1>
      <Contador likes={likes}></Contador>
      <BtnLikes callback={() => setLikes(++likes)}></BtnLikes>
      <GetName callback={(name) => setNombre(name)}></GetName>
    </div>
  );
}

export default App;
