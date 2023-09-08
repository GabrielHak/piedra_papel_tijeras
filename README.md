| Disclaimer |
| --- |
| Este documento es un resumen de la clase, no es autocontenido para aprender los temas dados. |

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

### División en más componentes

Ahora vamos a ver el caso donde el estado esta en el componente `App` y queremos
mostrar la cantidad de `likes` en un componente y manejar el evento `click` en
otro, para eso modificamos los dos componentes, creando el estado en `App`, pasando
como `props` la cantidad de `likes` a `Contador`, y pasando por `props` la función
de modificación de estado al nuevo componente, quedando así:

* App.jsx

```js
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
```

* Contador.jsx

```js
import '../Styles/Contador.css'

function Contador(props){

    return(
        <div className="contador">
            <label htmlFor="">Likes: {props.likes}</label>
        </div>
    );
}

export default Contador;
```

* BtnLikes.jsx

```js
function BtnLikes(props){
    return (
        <button onClick={() => props.callback()}>+1 Like</button>
    );
}

export default BtnLikes;
```

### Ejercicio extra

En el componente `App` tenemos un `h1` donde queremos imprimir un nombre que
vamos a obtener de otro componente `GetName` que tendrá un `input` y un `button`
para enviar la información, primero agregamos un nuevo estado al componente `App`
y agregamos la etquieta `h1` para mostrar el nombre, y llamamos al nuevo
componente pasandole la función para modificar el estado:

```js
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
```

Luego, creamos el componente, con un `input` y un `button`, y a `button`
le agregamos el atributo `onClick` con la lógica necesaria para obtener
el dato del `input` y mandarlo por la función que recibimos por `props`:

```js
function GetName(props){
    return(
        <div className="nombre">
            <input type="text" name="" id="nombre" />
            <button onClick={
                () => {
                    let nombre = document.getElementById('nombre').value;
                    props.callback(nombre);
                }
            }>Enviar</button>
        </div>
    );
}

export default GetName;
```

De esta forma, obtenemos un dato desde un componente y a través de callbacks
uso del estado de un componente lo mandamos a otro componente y actualizamos el DOM.
