import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from "./components/Dialogs/Messages";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (


            <div className='app-wrapper'>
                <Header/>
                <Nav friendsImages={props.state.friendsImages} navData={props.state.navData}/>
                <div className='app-wrapper_content'>
                    <Routes>

                        <Route path="/messages/*" element={<Messages dispatch={props.dispatch}
                                                                     messageMessagesData={props.state.messagesPage.messageMessagesData}
                                                                     messageItemData={props.state.messagesPage.messageItemData}
                                                                     messageNewText={props.state.messagesPage.messageNewText}

                        />}/>

                        <Route path="/profile" element={<Profile postData={props.state.profilePage.postData}
                                                                 dispatch={props.dispatch}
                                                                 newPostText={props.state.profilePage.newPostText}
                                                                 profileInfo={props.state.profilePage.profileInfo}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>

                </div>


            </div>

        );
}


export default App;
