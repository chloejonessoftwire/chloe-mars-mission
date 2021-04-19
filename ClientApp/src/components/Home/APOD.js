import React, { useState, useEffect } from 'react';

function APOD() {
    const [pictureData, setPictureData] = useState(null);

    useEffect(() => {
        // fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
        fetch(`https://api.nasa.gov/planetary/apod?api_key=ifz7VXUqxRSAvXSJ8GX405Ff2bsbZfHr7CVKHAGj`)
            .then(response => response.json())
            .then(data => setPictureData(data));
    }, []);

    if (!pictureData) {
        return <div> Waiting for data!</div>
    }

    if (pictureData.media_type == "video") {
        return (
            <div className='postOTDContainer'>
                <h2 className='featureTitle'>Nasa&apos;s feature of the day!</h2>
                <p className='postTitle'>{pictureData.title}</p>
                <iframe className='postOTD' width="320" height="240"
                    src={pictureData.url} >
                </iframe>
                <p className='explainOTD'>{pictureData.explanation}</p>
            </div>
        )
    } else if (pictureData.media_type == "image") {
        return (
            <div className='postOTDContainer'>
                <h2 className='featureTitle'>Nasa&apos;s feature of the day!</h2>
                <p className='postTitle'>{pictureData.title}</p>
                <img className='postOTD' src={pictureData.url} width="320" />
                <p className='explainOTD'>{pictureData.explanation}</p>
            </div>
        )
    }
    return null;
}

export { APOD };
