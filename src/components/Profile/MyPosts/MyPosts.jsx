import classes from'./MyPosts.module.css'
const MyPosts = () => {
    return (<div className={classes.MyPosts}>
    
    <div >
      My posts</div>
      <div>
        <textarea></textarea>
        <button>New post</button>
      </div>

      </div>)
}
export default MyPosts