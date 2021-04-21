import React from 'react';

function NewsArticle({data}) {
    return (
        <div>
            <h1> {data.title} </h1>
            <p> {data.description}</p>
            <span> {data.author}</span>
            <span> {data.publishedAt}</span>
            <span> {data.source.name}</span>

        </div>
    );
}
export default NewsArticle;