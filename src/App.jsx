import { useState } from 'react';
import './App.css';
import Contador from './Components/Contador';
import BtnLikes from './Components/BtnLikes';

function App() {
  let [likes, setLikes] = useState(0);
  return (
    <div className="App">
      <Contador likes={likes}></Contador>
      <BtnLikes callback={() => setLikes(++likes)}></BtnLikes>
    </div>
  );
}

export default App;
