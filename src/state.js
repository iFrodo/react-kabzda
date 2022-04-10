let store = {
    _state: {

        profilePage: {
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

        },
        messagesPage: {
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


        },
        friendsImages: [
            {id: 1, name: 'Sasha', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
            {
                id: 2,
                name: 'Alena',
                avatar: 'https://yt3.ggpht.com/a-/AAuE7mCDRjHltSg-2cbjl8JCnuGaJes5F4nlaKQSJg=s800-mo-c-c0xffffffff-rj-k-no'
            },
            {id: 3, name: 'Lada', avatar: 'https://proza.ru/pics/2014/01/12/2133.jpg'}],
        navData:
            [{id: '/profile', name: 'Profile'},
                {id: '/messages', name: 'Messages'},
                {id: '/news', name: 'News'},
                {id: '/music', name: 'Music'},
                {id: '/settings', name: 'Settings'}
            ]


    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('sa')

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let postData = {
                id: 5,
                message: this._state.profilePage.newPostText,

                likescount: '',
            }
            this._state.profilePage.postData.unshift(postData)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()

        } else if (action.type === 'CHANGE_NEW_POST_TEXT') {

            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
        else if (action.type === 'ADD_NEW_MESSAGE') {
            let messageMessagesData = {
                id: 5,
                message: this._state.messagesPage.messageNewText,
                likescount: '',
            }
            this._state.messagesPage.messageNewText = ''
            this._state.messagesPage.messageMessagesData.unshift(messageMessagesData)
            this._callSubscriber(this._state)

        }

        else if (action.type ==='CHANGE_NEW_MESSAGE_TEXT') {

            this._state.messagesPage.messageNewText = action.newText
            this._callSubscriber()
        }
    },


}


export const onChangeMessageActionCreator = (text) =>{
    return({type: 'CHANGE_NEW_MESSAGE_TEXT', newText:text})
}
export const onChangeNewPostActionCreator = (text) =>{
    return({type: 'CHANGE_NEW_POST_TEXT', newText: text})
}
export const addNewNewPostActionCreator = () =>{
    return({type: 'ADD_POST'})
}


export const addNewMessageActionCreator = () => {
    return ({type: 'ADD_NEW_MESSAGE'})
}
export default store
