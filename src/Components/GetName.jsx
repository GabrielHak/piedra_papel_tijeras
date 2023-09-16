import StyledButton from "./StyledButton";

function GetName(props){
    return(
        <div className="nombre">
            <input type="text" name="" id="nombre" />
            <StyledButton onClick={
                () => {
                    let nombre = document.getElementById('nombre').value;
                    props.callback(nombre);
                }
            } oscuro>Enviar</StyledButton>
        </div>
    );
}

export default GetName;