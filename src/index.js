import React from 'react';
import './index.css';
import store from './state'
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

window.store = store




let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')

    );
}
rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree)
/*
messageMessagesData={store.getState().messagesPage.messageMessagesData}
messageItemData={store.getState().messagesPage.messageItemData}
postData={store.getState().profilePage.postData}
friendsImages={store.getState().friendsImages}
navData={store.getState().navData}
newPostText={store.getState().profilePage.newPostText}
 messageNewText={store.getState().messagesPage.messageNewText}
 profileInfo={store.getState().profilePage.profileInfo}*/
