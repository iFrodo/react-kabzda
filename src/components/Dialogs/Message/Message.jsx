import React from "react";
import {onChangeMessageActionCreator} from "../../../store";

// const Message = (props) => {
//     debugger
// const addNewMessageActionCreator = (text) =>{
//     return(
//         {type: 'ADD_NEW_MESSAGE'}
//     )}
// const onChangeMessageActionCreator = () =>{
//     return({type: 'CHANGE_NEW_POST_TEXT'})
// }
//     const onChangeMessage = () => {
//
//         props.dispatch(onChangeMessageActionCreator)
//
//     }
//     let sendMessage = () => {
//         let text = newPostElement.current.value;
//         props.dispatch(addNewMessageActionCreator(text))
//     }
//     const newPostElement = React.createRef()
//     return (
//
//         <div>
//             <div>{props.message}</div>
//             <textarea onChange={onChangeMessage} value={props.dispatch} ref={newPostElement}></textarea>
//             <button onClick={sendMessage}>send</button>
//         </div>
//     )
// }


const Message = (props) => {




    return(
    <div>

            <div  key={props.key} id={props.id}>{props.message}</div>

    </div>
    )
}

export default Message