import './index.css';
import store from './redux-store'
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



window.store = store




let rerenderEntireThree = (state) => {

    ReactDOM.render(

            <BrowserRouter>
                <Provider store = {store}>
            <App state={state}/>
                </Provider>

            </BrowserRouter>
        ,
        document.getElementById('root')

    );
}

rerenderEntireThree(store.getState())
store.subscribe( () =>{
    let state = store.getState()
    rerenderEntireThree(state)})
