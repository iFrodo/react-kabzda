import MyPosts from './MyPosts/MyPosts'
import Post from './Post/Post'
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = () => {
    return (<div>
        <ProfileInfo />
    <div ><MyPosts/></div>

      <div> <Post message='Hi' likesCount='32'/></div>
      <div> <Post message='This my first project' likesCount='5'/></div>

     
      
      </div>)
}
export default Profile