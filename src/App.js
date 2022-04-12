import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from "./components/Dialogs/Messages";
import {Route, Routes} from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Dialogs/MessagesContainer";


const App = (props) => {

    return (


            <div className='app-wrapper'>
                <Header/>
               {/* <Nav friends={props.state.friends} navData={props.state.navData}/>*/}
                <div className='app-wrapper_content'>
                    <Routes>
                        <Route path="/messages/*" element={<MessagesContainer />}/>
          {/*              <Route path="/profile" element={<Profile state={props.state} store={props.store}/>}/>*/}
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>

                </div>


            </div>

        );
}


export default App;
