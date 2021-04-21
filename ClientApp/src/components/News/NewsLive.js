import React, {useContext} from 'react';
import { NewsContext } from '../../NewsContext';
import NewsArticle from './NewsArticle';

function NewsLive(props) {
    const { data } = useContext(NewsContext);
    return (
    <div>
        {data
            ? data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
             ))
            : "Loading"}
    </div>
    );
};

export default NewsLive;