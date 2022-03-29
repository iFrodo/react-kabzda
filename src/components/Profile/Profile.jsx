import MyPosts from './MyPosts/MyPosts'
import Post from './Post/Post'
import classes from'./Profile.module.css'

const Profile = () => {
    return (<div className={classes.profile}><img className={classes.main_theme} src='https://i.ucrazy.ru/files/i/2012.6.5/1338913960_f88c636ee0178de20d2dead9e01.jpg'/>
    <div>
      ava+discription
      </div>
    <div >
      <MyPosts/></div>
      <div> <Post message='Hi' likesCount='32'/></div>
      <div> <Post message='This my first project' likesCount='5'/></div>

     
      
      </div>)
}
export default Profile