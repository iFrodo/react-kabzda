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

const App = (props) => {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
        <Header/>
        <Nav/>
        <div className='app-wrapper_content'>
            <Routes>
            <Route path="/messages/" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            </Routes>

        </div>


    </div>

        </BrowserRouter>);
}


export default App;
