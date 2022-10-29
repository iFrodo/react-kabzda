const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'
export const onChangeMessageActionCreator = (text) => {
    return ({type: 'CHANGE_NEW_MESSAGE_TEXT', newText: text})
}
export const addNewMessageActionCreator = () => {
    return ({type: 'ADD_NEW_MESSAGE'})
}
let initialState = {
    messageNewText: 'Drow here',
    messageMessagesData: [{id: 1, message: 'Hello'},
        {id: 2, message: 'AVANA'},
        {id: 3, message: 'KEDAVRA'},
        {id: 4, message: 'ZAE'},
        {id: 5, message: 'XER'},
        {id: 6, message: 'REX'},
    ],
    messageItemData: [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Anton'},
        {id: 4, name: 'Brandon'},
        {id: 5, name: 'Ilya'},
        {id: 6, name: 'Peter'},],

}
const messagesReduser = (state = initialState,action) => {

    switch (action.type){
        case ADD_NEW_MESSAGE:{
            return {...state,messageMessagesData:[{id: 5, message: [...state.messageNewText], likescount: ''},...state.messageMessagesData],messageNewText : ''}





            //state.messageMessagesData.pop(messageMessagesData)
            }

        case CHANGE_NEW_MESSAGE_TEXT:{
            return {...state,messageNewText:action.newText}}

        default :return state;
    }
}
export default messagesReduser;