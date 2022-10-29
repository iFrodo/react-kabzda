import './index.css';
import store from './redux-store'
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



window.store = store






    ReactDOM.render(

            <BrowserRouter>
                <Provider store = {store}>
            <App />
                </Provider>

            </BrowserRouter>
        ,
        document.getElementById('root')

    );



store.subscribe(() => console.info(store.getState()))
