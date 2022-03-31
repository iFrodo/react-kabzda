import classes from'./MyPosts.module.css'
import Post from "../Post/Post";
import React from "react";
import {addPost} from "../../../state";
const myFunction = (props) => {
    debugger
    let text = newPostElement.current.value
    addPost(text)
}
const newPostElement = React.createRef()

const MyPosts = (props) => {
    let postElements = props.postData.map (post => <Post  id={post.id} message={post.message} likesCount={post.likescount}/>)
    return (<div className={classes.MyPosts}>
    
    <div >
      My posts</div>
      <div className={classes.post_button}>
        <textarea ref={newPostElement}></textarea>
        <button onClick={myFunction} id='butt'>New post</button>

      </div>
        <div className={classes.item}>
        {postElements}
        </div>

      </div>)
}



export default MyPosts