# Clase 07/09/23

## Estado de un componente

### Primera vista, modificando una variable local

Para este ejemplo, tendremos el componente principal `App.jsx` de la siguiente
forma:

```js
import './App.css';
import Contador from './Components/Contador';

function App() {

  return (
    <div className="App">
      <Contador ></Contador>
    </div>
  );
}

export default App;
```

Y el componente `Contador.jsx` asi:

```js
function Contador(props){
    let likes = 0;

    return(
        <div className="contador">
            <label htmlFor="">Likes: {likes}</label>
            <button onClick={
                () => {
                    ++likes;
                    console.log(likes);
                }
            }>+1 Like</button>
        </div>
    );
}

export default Contador;

```

En este ejemplo, al hacer clik en el boton `+1 Like` no vemos nigún cambio
visual, pero si vamos a la consola y vemos el resultado podemos notar que la
variables `likes` si esta cambiando de valor.
Lo que sucede es que no se actualiza el componente, ya que *React* solo
actualiza los componentes en los que se haya producido un cambio de **estado**.
Para lograr esto, y de esta forma obtener cierto dinamismo entre los eventos
y lo que logramos ver, vamos a hacer uso del `hook` `useState` que nos provee
*React*.

### Usando `useState`

`useState` es una función que devuelve un arreglo con dos elementos, el primero
es el estado actual de nuestro componente, y el segundo es una función para
poder modificar ese estado. `useState` toma un parámetro que es el valor incial
que queremos asignarle a neustro estado, para nuestro ejemplo será `0`.
Para guardar esos dos elementos en dos variables separadas vamos a hacer uso
del `deconstruction` que nos provee JS. Vamos a guardar el estado en un variable
llamada `likes`, la función para modificarla en una variable llamada `setLikes`,
y vamos a pasar por parámetro el valor `0` para que inicialice `likes`, además
de importar la correspondiente librería.
Nos quedaría algo asi: 

```js
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
```

Hecho de esta manera ahora `likes` es el estado del componente y al usar la
función `setLikes` para modificar ese estado, al hacer `click` en el botón
tambien se renderiza de nuevo el componente.
