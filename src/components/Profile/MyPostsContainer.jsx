import MyPosts from './MyPosts/MyPosts'
import {addNewNewPostActionCreator, onChangeNewPostActionCreator} from "../../redusers/profiles-reduser";
import {useDispatch, useSelector} from "react-redux";



const MyPostsContainer = () => {
const profilePage = useSelector(state =>  state.profilePage)
const dispatch = useDispatch()


let addPost = () =>{
   dispatch(addNewNewPostActionCreator())
}
    const onChange = (text) => {

        //props.changeNewPostText(text)
        dispatch(onChangeNewPostActionCreator(text))
    }
    return (<div>
        <div ><MyPosts  onAddPost={addPost} changeNewPostText={onChange} postData={profilePage.postData} newPostText={profilePage.newPostText}/></div  >



     
      
      </div>)
}
export default MyPostsContainer