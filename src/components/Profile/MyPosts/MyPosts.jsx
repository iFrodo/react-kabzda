import classes from './MyPosts.module.css'
import Post from "../Post/Post";
import React from "react";



const MyPosts = (props) => {

    const addPost = () => {
        props.onAddPost();
    }
    const onChange = (e) => {
        let text = e.target.value
        props.changeNewPostText(text)
    }
    let postElements = props.postData.map(post => <Post id={post.id} key={post.id} message={post.message}
                                                        likesCount={post.likescount}/>)
    return (<div className={classes.MyPosts}>
        <div>
            My posts
        </div>
        <div className={classes.post_button}>
            <textarea onChange={onChange} value={props.newPostText} ></textarea>
            <button onClick={addPost} id='butt'>New post</button></div>
        <div className={classes.item}>
            {postElements}
        </div>

    </div>)
}


export default MyPosts