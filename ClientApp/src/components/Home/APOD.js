import React, { useState, useEffect } from 'react';

import './APOD.scss'

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
            <div className='APODContainer'>
                <h2 className='featureTitle'>Nasa&apos;s feature of the day!</h2>
                <p className='APODTitle'>{pictureData.title}</p>
                <div className='APODPostContainer'>
                    <iframe className='APODPost' width="320" height="240"
                        src={pictureData.url} >
                    </iframe>
                </div>
                <p className='explainOTD'>{pictureData.explanation}</p>
            </div>
        )
    } else if (pictureData.media_type == "image") {
        return (
            <div className='APODContainer'>
                <h2 className='featureTitle'>Nasa&apos;s feature of the day!</h2>
                <p className='APODTitle'>{pictureData.title}</p>
                <div className='APODPostContainer'>
                    <img className='APODPost' src={pictureData.url} width="320" />
                </div>
                <p className='APODExplanation'>{pictureData.explanation}</p>
            </div>
        )
    }
    return null;
}

export { APOD };
