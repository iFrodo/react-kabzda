import React from 'react';
import './index.css';
import state, {addNewMessage, addPost, changeNewMessage, changeNewPostText,subscribe} from './state'
import ReactDOM from "react-dom";
import App from "./App";
window.state = state

let rerenderEntireThree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App messageMessagesData={state.messagesPage.messageMessagesData}
                 messageItemData={state.messagesPage.messageItemData}
                 postData={state.profilePage.postData}
                 friendsImages={state.friendsImages}
                 navData={state.navData} addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 changeNewPostText={changeNewPostText} messageNewText={state.messagesPage.messageNewText}
                 changeNewMessage ={changeNewMessage }addNewMessage={addNewMessage}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(state)
subscribe(rerenderEntireThree)
