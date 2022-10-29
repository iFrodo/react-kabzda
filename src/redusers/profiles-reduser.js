const ADD_POST = 'ADD_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

let initialState ={
    newPostText: 'it-kamasutra',
    postData: [{id: 1, message: 'Hi', likescount: '14'},
        {id: 2, message: 'This my first project', likescount: '123'},
        {id: 2, message: 'This my first project', likescount: '123'},
        {id: 2, message: 'This my first project', likescount: '123'}],
    profileInfo: [
        {id: 1, name: 'Игорь `lFrodo` Пшеничный'},
        {id: 2, from: 'Город: Simferopol'},
        {id: 3, birthday: 'День рождения: 02.09.1997'},
        {id: 4, family: 'Семейное положение : женат'}
    ],

}

const profileReduser = (state = initialState,action) => {

    switch (action.type){
        case ADD_POST:
            return {...state, postData:[{id: 5, message:[...state.newPostText], likescount: ''},...state.postData,],newPostText : ''}

        case CHANGE_NEW_POST_TEXT:
            return  {...state,newPostText : action.newText}

        default :return state;
    }


}

export const onChangeNewPostActionCreator = (text) => {
    return ({type: 'CHANGE_NEW_POST_TEXT', newText: text})
}
export const addNewNewPostActionCreator = () => {
    return ({type: 'ADD_POST'})
}
export default profileReduser;