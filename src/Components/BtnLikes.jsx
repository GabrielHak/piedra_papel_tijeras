function BtnLikes(props){
    return (
        <button onClick={
            () => {
                props.callback();
            }
        }>+1 Likes</button>
    );
}

export default BtnLikes;