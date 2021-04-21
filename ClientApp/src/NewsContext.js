import React, {useContext, createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey="6d17337f1f3a4268afd687a06ad1ba61";

    useEffect(() => {
        axios.get(
            `https://newsapi.org/v2/top-headlines?language=en&category=science&q=nasa&from=2021-03-21&sortBy=publishedAt&apiKey=${apiKey}`
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