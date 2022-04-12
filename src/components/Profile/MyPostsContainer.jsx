import MyPosts from './MyPosts/MyPosts'
import {addNewNewPostActionCreator, onChangeNewPostActionCreator} from "../../redusers/profiles-reduser";



const MyPostsContainer = (props) => {
let state = props.store.getState()

let addPost = () =>{
   props.store.dispatch(addNewNewPostActionCreator())
}
    const onChange = (text) => {

        //props.changeNewPostText(text)
        props.store.dispatch(onChangeNewPostActionCreator(text))
    }
    return (<div>
        <div ><MyPosts  onAddPost={addPost} changeNewPostText={onChange} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/></div  >



     
      
      </div>)
}
export default MyPostsContainer