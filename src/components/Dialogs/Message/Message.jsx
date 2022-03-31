import React from 'react';


const Message = (props) =>{
    let sendMessage =() => {
        let text = newPostElement.current.value;
        alert(text)
    }

    const newPostElement = React.createRef()
    return(
        <div ><div>{props.message}</div><textarea ref={newPostElement}></textarea><button onClick={sendMessage}>send</button></div>
    )
}
export default Message