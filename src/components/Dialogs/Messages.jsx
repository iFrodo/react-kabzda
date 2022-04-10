import React from 'react';
import classes from "./Messages.module.css"

import MessagesItem from "./MessageItem/MessagesItem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../state";





const Messages = (props) => {

/*    const friendsImagesElements = props.friendsImages.map(i => <friendsImagesItem >name={i.name}/>*/
    const messagesElements = props.messageItemData.map(dialog => <MessagesItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    const profileElements = props.messageMessagesData.map(message => <Message key={message.id} id={message.id} message={message.message} messageNewText={props.messageNewText}/>)
    const newPostElement = React.createRef()

    const onChangeMessage = (e) => {
        let text = e.target.value

        props.dispatch(onChangeMessageActionCreator(text))
    }


    const addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator())
    }

    return (
        <div className={classes.dialogs_menu}>
            Dialogs

            <div className={classes.peaple}>
                {messagesElements}

            </div>

            <div className={classes.messages}>
                {profileElements}

                <textarea onChange={onChangeMessage}  value={props.messageNewText}></textarea>
                <button onClick={addNewMessage}>Send</button>
            </div>


        </div>

    )
}


export default Messages