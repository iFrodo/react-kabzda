import React from 'react';
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../redusers/messages-reduser";
import Messages from "./Messages";
import {useDispatch, useSelector} from "react-redux";






const MessagesContainer = () => {
    const messagesPage = useSelector(state =>  state.messagesPage)
    const dispatch = useDispatch()

    const onChangeMessage = (text) => {
        dispatch(onChangeMessageActionCreator(text))
    }
    const addNewMessage = () => {
        dispatch(addNewMessageActionCreator())
    }
    return (

        <Messages updateNewMessageText={onChangeMessage} onAddNewMessage={addNewMessage}
                  messageMessagesData={messagesPage.messageMessagesData}
                  messageItemData={messagesPage.messageItemData}
                  messageNewText={messagesPage.messageNewText}/>

    )
}


export default MessagesContainer