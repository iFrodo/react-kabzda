import classes from'./MyPosts.module.css'
import Post from "../Post/Post";
const myFunction = () => {
    alert("Размечтался")
}


const MyPosts = (props) => {
    let postElements = props.postData.map (post => <Post  id={post.id} message={post.message} likesCount={post.likescount}/>)
    return (<div className={classes.MyPosts}>
    
    <div >
      My posts</div>
      <div className={classes.post_button}>
        <textarea></textarea>
        <button onClick={myFunction} id='butt'>New post</button>

      </div>
        <div className={classes.item}>
        {postElements}
        </div>

      </div>)
}



export default MyPosts