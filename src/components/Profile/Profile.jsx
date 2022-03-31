import MyPosts from './MyPosts/MyPosts'
import Post from './Post/Post'
import ProfileInfo from "./ProfileInfo/profileInfo";
import {addPost} from "../../state";

const Profile = (props) => {
    return (<div>
        <ProfileInfo />
    <div ><MyPosts postData={props.postData} addPost={props.addPost}/></div  >



     
      
      </div>)
}
export default Profile