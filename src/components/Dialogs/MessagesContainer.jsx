import React from 'react';
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../redusers/messages-reduser";
import Messages from "./Messages";






const MessagesContainer = (props) => {
let state = props.store.getState()
    const onChangeMessage = (text) => {
        props.store.dispatch(onChangeMessageActionCreator(text))
    }
    const addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator())
    }
    return (
        <Messages updateNewMessageText={onChangeMessage} onAddNewMessage={addNewMessage}
                  messageMessagesData={state.messagesPage.messageMessagesData}
                  messageItemData={state.messagesPage.messageItemData}
                  messageNewText={state.messagesPage.messageNewText}/>

    )
}


export default MessagesContainer