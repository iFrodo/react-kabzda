import React from 'react';
import './index.css';
import store from './redux-store'
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

window.store = store




let rerenderEntireThree = (state) => {
    ReactDOM.render(

            <BrowserRouter>
                <StoreContext.Provider value={store}>
            <App/>
                </StoreContext.Provider>
            />
            </BrowserRouter>
        ,
        document.getElementById('root')

    );
}

rerenderEntireThree(store.getState())
store.subscribe( () =>{
    let state = store.getState()
    rerenderEntireThree(state)})
