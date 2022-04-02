import MyPosts from './MyPosts/MyPosts'
import Post from './Post/Post'
import ProfileInfo from "./ProfileInfo/profileInfo";
import {changeNewPostText} from "../../state";


const Profile = (props) => {
    return (<div>
        <ProfileInfo />
    <div ><MyPosts postData={props.postData} addPost={props.addPost} newPostText={props.newPostText}changeNewPostText={props.changeNewPostText}/></div  >



     
      
      </div>)
}
export default Profile