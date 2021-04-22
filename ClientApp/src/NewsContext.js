import React, {useContext, createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(
            // `https://newsapi.org/v2/top-headlines?language=en&category=science&q=nasa&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY_2}`
            `https://newsapi.org/v2/top-headlines?language=en&category=science&q=nasa&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, [data]);
    
    return(
        <NewsContext.Provider value={{data}}>
            {props.children} 
        </NewsContext.Provider>
    );
};