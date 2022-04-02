import classes from './MyPosts.module.css'
import Post from "../Post/Post";
import React from "react";


const newPostElement = React.createRef()

const MyPosts = (props) => {

    const myFunction = () => {
        props.addPost();

    }
    const onChange = () => {
        let text = newPostElement.current.value
        props.changeNewPostText(text)
    }
    let postElements = props.postData.map(post => <Post id={post.id} message={post.message}
                                                        likesCount={post.likescount}/>)
    return (<div className={classes.MyPosts}>

        <div>
            My posts
        </div>
        <div className={classes.post_button}>
            <textarea onChange={onChange} value={props.newPostText} ref={newPostElement}></textarea>
            <button onClick={myFunction} id='butt'>New post</button>

        </div>
        <div className={classes.item}>
            {postElements}
        </div>

    </div>)
}


export default MyPosts