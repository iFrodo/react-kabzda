import {combineReducers, createStore} from "redux";
import messagesReduser from "./redusers/messages-reduser";
import profileReduser from "./redusers/profiles-reduser";
import friendsReduser from "./redusers/friends-reduser";
import navDataReduser from "./redusers/navData-reduser";
let redusers = combineReducers({
    messagesPage: messagesReduser,
    profilePage: profileReduser,
    friends: friendsReduser,
    navData: navDataReduser
    }
)

let store = createStore(redusers)
export default store