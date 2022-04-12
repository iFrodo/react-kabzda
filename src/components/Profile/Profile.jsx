import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPostsContainer";
const Profile = (props) => {
    return (<div>
      <div><ProfileInfo profileInfo={props.state.profilePage.profileInfo} /></div>
        <div ><MyPostsContainer store={props.store}/></div  >



     
      
      </div>)
}
export default Profile