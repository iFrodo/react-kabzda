import MyPosts from './MyPosts/MyPosts'
import Post from './Post/Post'
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = (props) => {
    return (<div>
        <ProfileInfo />
    <div ><MyPosts postData={props.postData}/></div>



     
      
      </div>)
}
export default Profile