import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from "./components/Dialogs/Messages";
import { BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {changeNewPostText} from "./state";


const App = (props) => {

    return (
        <BrowserRouter>

            <div className='app-wrapper'>
        <Header/>
        <Nav friendsImages={props.friendsImages} navData={props.navData} />
        <div className='app-wrapper_content'>
            <Routes>

            <Route path="/messages/*" element={<Messages messageMessagesData = {props.messageMessagesData} messageItemData={props.messageItemData} />} />
            <Route path="/profile" element={<Profile postData={props.postData } addPost={props.addPost} newPostText={props.newPostText}changeNewPostText={props.changeNewPostText} />} />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            </Routes>

        </div>


    </div>

        </BrowserRouter>);
}


export default App;
