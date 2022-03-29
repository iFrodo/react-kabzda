import React from 'react';
import classes from "./Messages.module.css"
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={classes.dialogs_menu}>
            Dialogs
            <div className={classes.peaple}>

                <div ><NavLink to='/dialogs/1'>Igor</NavLink></div>
                <div> Sasha</div>
                <div>Anton</div>
                <div>Ilya</div>
                <div>Brandon</div>
                <div> Peter</div>

            </div>
            <div className={classes.messages}>

                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>


            </div>
        </div>
    )
}
export default Messages