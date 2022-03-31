import React from 'react';
import classes from "./Messages.module.css"

import MessagesItem from "./MessageItem/MessagesItem";
import Message from "./Message/Message";




const Messages = (props) => {
/*    const friendsImagesElements = props.friendsImages.map(i => <friendsImagesItem >name={i.name}/>*/
    const messagesElements = props.messageItemData.map(dialog => <MessagesItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    const profileElements = props.messageMessagesData.map(message => <Message key={message.id} id={message.id} message={message.message}/>)

    return (
        <div className={classes.dialogs_menu}>
            Dialogs

            <div className={classes.peaple}>
                {messagesElements}

            </div>
            <div className={classes.messages}>
                {profileElements}
            </div>

        </div>

    )
}


export default Messages