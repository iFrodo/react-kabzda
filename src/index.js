import React from 'react';
import './index.css';
import store from './state'
import ReactDOM from "react-dom";
import App from "./App";
window.store = store

let rerenderEntireThree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App messageMessagesData={store.getState().messagesPage.messageMessagesData}
                 messageItemData={store.getState().messagesPage.messageItemData}
                 postData={store.getState().profilePage.postData}
                 friendsImages={store.getState().friendsImages}
                 navData={store.getState().navData} addPost={store.addPost.bind(store)}
                 newPostText={store.getState().profilePage.newPostText}
                 changeNewPostText={store.changeNewPostText.bind(store)} messageNewText={store.getState().messagesPage.messageNewText}
                 changeNewMessage ={store.changeNewMessage.bind(store) }addNewMessage={store.addNewMessage.bind(store)}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree)
