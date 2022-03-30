import React from 'react';

import {NavLink} from "react-router-dom";

const MessagesItem =(props) => {
    return(
        <div ><NavLink to={/messages/ + props.id}>{props.name}</NavLink></div>
    )
}

export default MessagesItem;