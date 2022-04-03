import React from 'react';



const Message = (props) =>{

    const onChangeMessage = () => {

        props.changeNewMessage ()

    }
    let sendMessage =() => {
        let text = newPostElement.current.value;
        props.addNewMessage(text)
    }

    const newPostElement = React.createRef()

    return(

        <div ><div>{props.message}</div><textarea onChange={onChangeMessage} value={props.messageNewText} ref={newPostElement}></textarea><button onClick={sendMessage}>send</button></div>
    )
}
export default Message