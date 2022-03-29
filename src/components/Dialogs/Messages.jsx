import React from 'react';
import classes from "./Messages.module.css"
import {NavLink} from "react-router-dom";


const MessagesItem =(props) => {
    return(
        <div ><NavLink to={/messages/ + props.id}>{props.name}</NavLink></div>
    )
}
const Message = (props) =>{
    return(
        <div>{props.message}</div>
    )
}

const Messages = (props) => {
    return (
        <div className={classes.dialogs_menu}>
            Dialogs
            <div className={classes.peaple}>

                <MessagesItem name='Igor' id='1' />
                <MessagesItem name='Sasha' id='2' />
                <MessagesItem name='Anton' id='3' />
                <MessagesItem name='Brandon' id='4' />
                <MessagesItem name='Ilya' id='5' />
                <MessagesItem name='Peter' id='6' />


            </div>
            <div className={classes.messages}>

                <Message message='Hello'/>
                <Message message='Hello my friend'/>
                <Message message='Hello how are y?'/>
                <Message message='Whats up'/>
                <Message message='My name is Ilya'/>
                <Message message='Hello'/>



            </div>
        </div>
    )
}
export default Messages