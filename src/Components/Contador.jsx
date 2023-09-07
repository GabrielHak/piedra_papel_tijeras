import '../Styles/Contador.css'

function Contador(props){
    return(
        <div className="contador">
            <label htmlFor="">Likes: {props.likes}</label>
        </div>
    );
}

export default Contador;