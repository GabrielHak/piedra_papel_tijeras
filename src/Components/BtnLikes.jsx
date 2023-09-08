function BtnLikes(props){
    return (
        <button onClick={() => props.callback()}>+1 Like</button>
    );
}

export default BtnLikes;