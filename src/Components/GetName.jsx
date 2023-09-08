function GetName(props){
    return (
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