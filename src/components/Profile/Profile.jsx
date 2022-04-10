import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/profileInfo";



const Profile = (props) => {

    return (<div>
      <div><ProfileInfo profileInfo={props.profileInfo} /></div>
        <div ><MyPosts postData={props.postData} dispatch={props.dispatch} newPostText={props.newPostText}/></div  >



     
      
      </div>)
}
export default Profile