import { useState } from 'react';
import '../Styles/Contador.css'

function Contador(props){
    let [likes, setLikes] = useState(0);

    return(
        <div className="contador">
            <label htmlFor="">Likes: {likes}</label>
            <button onClick={
                () => {
                    setLikes(++likes);
                    console.log(likes);
                }
            }>+1 Like</button>
        </div>
    );
}

export default Contador;
