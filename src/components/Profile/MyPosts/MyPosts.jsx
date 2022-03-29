import classes from'./MyPosts.module.css'
import Post from "../Post/Post";
const myFunction = () => {
    alert("Размечтался")
}
const MyPosts = () => {
    return (<div className={classes.MyPosts}>
    
    <div >
      My posts</div>
      <div className={classes.post_button}>
        <textarea></textarea>
        <button onClick={myFunction} id='butt'>New post</button>

      </div>
        <div> <Post message='Hi' likesCount='32'/></div>
        <div> <Post message='This my first project' likesCount='5'/></div>

      </div>)
}



export default MyPosts