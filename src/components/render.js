import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import {addPost, changeNewPostText} from "../state";

export let rerenderEntireThree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App messageMessagesData={state.messagesPage.messageMessagesData}
                 messageItemData={state.messagesPage.messageItemData}
                 postData={state.profilePage.postData}
                 friendsImages={state.friendsImages}
                 navData={state.navData} addPost={addPost} newPostText={state.profilePage.newPostText}changeNewPostText={changeNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}