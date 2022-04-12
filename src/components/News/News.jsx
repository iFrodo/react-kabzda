import React from 'react';
import classes from "./News.module.css"
import NewsItem from "./newsItem";
const News = (props) => {
    return (
        <div className={classes.news_menu}>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
    )
}
export default News