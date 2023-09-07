function BtnLikes(props){
    return(
        <button onClick={() => props.callBack()}>+1 Like</button>
    );
}

export default BtnLikes;