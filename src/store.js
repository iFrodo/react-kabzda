import messagesReduser from "./redusers/messages-reduser";
import profileReduser from "./redusers/profiles-reduser";
import friendsReduser from "./redusers/friends-reduser";
import navDataReduser from "./redusers/navData-reduser";

let store = {
    _state: {
    },
    getState() {
        return this._state
    },
    _callSubscriber() {

        console.log('sa')

    },
    subscribe(listener) {
        this._callSubscriber = listener
    },
    dispatch(action) {
        this._state.messagesPage = messagesReduser( action)
        this._state.profilePage = profileReduser(this._state.profilePage,action)
        this._state.friends = friendsReduser(this._state.friends, action)
        this._state.navData = navDataReduser(this._state.navData,action)
        this._callSubscriber(this._state)
    },


}



export default store
