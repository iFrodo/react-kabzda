import React from 'react';
import classes from './MessagesItem.module.css'
import {NavLink} from "react-router-dom";

const MessagesItem =(props) => {
    return(
        <div className={classes.messagesItem}><NavLink to={/messages/ + props.id}>{props.name}</NavLink></div>
    )
}

export default MessagesItem;