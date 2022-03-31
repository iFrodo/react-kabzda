import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from './state'


ReactDOM.render(
  <React.StrictMode>
    <App messageMessagesData={state.messagesPage.messageMessagesData}
         messageItemData={state.messagesPage.messageItemData}
         postData={state.profilePage.postData}
         friendsImages={state.friendsImages}
         navData={state.navData} addPost={addPost}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
