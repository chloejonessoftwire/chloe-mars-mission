import React from 'react';

import './News.scss'

function NewsArticle({data}) {
    return (
        <div className='news-item'>
            <h1> {data.title} </h1>
            <p> {data.description}</p>
            <div className='news-image'>
                <img src={data.urlToImage} width='90%' />
            </div>
            <span> {data.author}|</span>
            <span> {data.publishedAt}|</span>
            <span> {data.source.name}</span>
        </div>
    );
}
export default NewsArticle;