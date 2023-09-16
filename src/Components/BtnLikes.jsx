import StyledButton from "./StyledButton";

function BtnLikes(props){
    return (
        <StyledButton onClick={() => props.callback()} oscuro color="green">+1 Like</StyledButton>
    );
}

export default BtnLikes;