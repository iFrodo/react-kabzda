
let store = {
    _state: {

        profilePage: {
            newPostText:'it-kamasutra',
            postData: [{id: 1, message: 'Hi', likescount: '14'},
                {id: 2, message: 'This my first project', likescount: '123'},
                {id: 2, message: 'This my first project', likescount: '123'},
                {id: 2, message: 'This my first project', likescount: '123'}],

        },
        messagesPage: {
            messageMessagesData: [{id: 1, message: 'Hello'},
                {id: 2, message: 'My name is Sasha'},
                {id: 3, message: 'AVANOKEDAVRA'},
                {id: 4, message: 'ФЫВЧЯСЧЧы'},
                {id: 5, message: 'Приветик'},
                {id: 6, message: 'Hello'}],
            messageItemData: [
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Anton'},
                {id: 4, name: 'Brandon'},
                {id: 5, name: 'Ilya'},
                {id: 6, name: 'Peter'},],
            messageNewText:'Drow here'
        },
        friendsImages: [
            {id: 1 ,name: 'Sasha',avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
            {id: 2 ,name: 'Alena',avatar: 'https://yt3.ggpht.com/a-/AAuE7mCDRjHltSg-2cbjl8JCnuGaJes5F4nlaKQSJg=s800-mo-c-c0xffffffff-rj-k-no'},
            {id: 3 ,name: 'Lada', avatar: 'https://proza.ru/pics/2014/01/12/2133.jpg'}],
        navData:
            [{id:'/profile',name:'Profile'},
                {id:'/messages',name:'Messages'},
                {id:'/news',name:'News'},
                {id:'/music',name:'Music'},
                {id:'/settings',name:'Settings'}
            ]


    },
    getState (){
        return this._state
    },
    rerenderEntireThree()  {
        console.log('sa')

},
    addPost () {
        debugger
        let postData = {
            id:5,
            message:this._state.profilePage.newPostText,
            likescount:'',
        }
        this._state.profilePage.postData.unshift(postData)
        this.changeNewPostText('')
        this._state.rerenderEntireThree()
    },
    changeNewPostText  (newPost) {
        debugger
        this._state.profilePage.newPostText = newPost
        this._state.rerenderEntireThree()
    },
    changeNewMessage  (newPost)  {
        this._state.messagesPage.messageNewText = newPost
        this._state.rerenderEntireThree()
    },
    addNewMessage () {

        let messageMessagesData = {

            id:5,
            message: this._state.messagesPage.messageNewText,
            likescount:'',
        }
        this._state.messagesPage.messageMessagesData.unshift(messageMessagesData)
        this.changeNewPostText('')
        this._state.rerenderEntireThree()
    },
    subscribe  (observer)  {
        this._state.rerenderEntireThree = observer
    }
    }





export default store
