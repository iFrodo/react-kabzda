import React from 'react';
import classes from "./Messages.module.css"
import {NavLink} from "react-router-dom";
const messageItemData =[
    {id:1 , name:'Igor'},
    {id:2 , name:'Sasha'},
    {id:3 , name:'Anton'},
    {id:4 , name:'Brandon'},
    {id:5 , name:'Ilya'},
    {id:6 , name:'Peter'},

];
const messageMessagesData = [
    {id:1, message:'Hello'},
    {id:2, message:'My name is Sasha'},
    {id:3, message:'AVANOKEDAVRA'},
    {id:4, message:'ФЫВЧЯСЧЧы'},
    {id:5, message:'Приветик'},
    {id:6, message:'Hello'}
];

const MessagesItem =(props) => {
    return(
        <div ><NavLink to={/messages/ + props.id}>{props.name}</NavLink></div>
    )
}
const Message = (props) =>{
    return(
        <div >{props.message}</div>
    )
}
const messagesElements = messageItemData.map ( dialog  => <MessagesItem key ={dialog.id} name={dialog.name} id={dialog.id} />)
const profileElements = messageMessagesData.map ( message =><Message key ={message.id}id={message.id} message={message.message}/> )

const Messages = (props) => {
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