import classes from'./MyPosts.module.css'
import Post from "../Post/Post";
const myFunction = () => {
    alert("Размечтался")
}
const postData = [
    {id: 1, message:'Hi', likescount:'14'},
    {id: 2, message:'This my first project', likescount:'123'},
    {id: 2, message:'This my first project', likescount:'123'},
    {id: 2, message:'This my first project', likescount:'123'}
]
let postElements = postData.map (post => <Post id={post.id} message={post.message} likesCount={post.likescount}/>)
const MyPosts = () => {
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