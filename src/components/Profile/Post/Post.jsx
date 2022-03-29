import classes from'./Post.module.css'

const Post = (props) => {
    return (
      <div>
      <div className={classes.item}><img className={classes.img} src='https://avatars.mds.yandex.net/i?id=53b61d1daf55cee2a4e28892943cf627-5495958-images-thumbs&n=13'></img>
      {props.message}
      </div>
            <div className={classes.like}><span>like</span>{props.likesCount}</div>
           
      </div>
      )
}

export default Post