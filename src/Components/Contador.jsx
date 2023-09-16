import '../Styles/Contador.css'
import StyledLink from "./StyledLink"

function Contador(props){

    return(
        <div className="contador">
            <label htmlFor="">Likes: {props.likes}</label>
            <StyledLink></StyledLink>
        </div>
    );
}

export default Contador;
