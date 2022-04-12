import React from 'react';
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../redusers/messages-reduser";
import Messages from "./Messages";
import StoreContext from "../../StoreContext";






const MessagesContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                const onChangeMessage = (text) => {
                    store.dispatch(onChangeMessageActionCreator(text))
                }
                const addNewMessage = () => {
                    store.dispatch(addNewMessageActionCreator())
                }

                return <Messages updateNewMessageText={onChangeMessage} onAddNewMessage={addNewMessage}
                  messageMessagesData={state.messagesPage.messageMessagesData}
                  messageItemData={state.messagesPage.messageItemData}
                  messageNewText={state.messagesPage.messageNewText}/>}
        }
        </StoreContext.Consumer>

    )
}


export default MessagesContainer