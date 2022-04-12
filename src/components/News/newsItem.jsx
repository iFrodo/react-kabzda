import React from 'react';
import classes from "./News.module.css"
const NewsItem = () => {
    return (
        <div className={classes.news_menu}>
            <div className={classes.headline}>headline</div>
            <div className={classes.body}>body</div>
        </div>
    )
}
export default NewsItem