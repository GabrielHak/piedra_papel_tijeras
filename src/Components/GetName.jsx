function GetName(props) {
    function getName() {
        let name = document.getElementById('nombre').value;
        props.callBack(name);
    }
    return (
        <div className="name">
            <input type="text" placeholder="Name" id="nombre" />
            <button onClick={() => getName()}>Enviar</button>
        </div>
    );
}

export default GetName;