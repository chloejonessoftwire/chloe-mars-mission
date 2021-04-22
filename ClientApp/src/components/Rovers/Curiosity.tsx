import React from 'react';
import { useState, useEffect } from "react";
import { RoverPhoto } from './RoverPhoto';

function Curiosity() {
    const [curiosityPhotoData, setCuriosityPhotoData] = useState(null);
    const [searchDate, setSearchDate] = useState("2012-08-08");
    const [submitDate, setSubmitDate] = useState("2012-08-08");
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&earth_date=${submitDate}&camera=navcam&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setCuriosityPhotoData(data)
            })
    }, [submitDate]);

    function searchForNewDate() {
        setSubmitDate(searchDate)
    }

    if (!curiosityPhotoData) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    const curiosityPhotos = curiosityPhotoData.photos.slice(0, 6);
    let photoAvailableBoolean = false;
    let displayDataJsx
    if (curiosityPhotos.length > 0) {
        photoAvailableBoolean = true;
    }

    if (photoAvailableBoolean == true) {
        displayDataJsx = <RoverPhoto photoData={curiosityPhotos} />
    } else {
        displayDataJsx = <div>No photos available for this date. Please choose a different date. Curiosity rover has been on Mars from 2012-08-08 till today. Some dates may not have images. </div>
    }

    return (
        <div>
            <label className="rover-date-top-padding">
                Date
                <input className="rover-input-date" type="date" name="searchDate" onChange={e => setSearchDate(e.target.value)} />
                <button className="rover-input-date" onClick={() => searchForNewDate()}>Search</button>
            </label>
            {displayDataJsx}   
        </div>

    )
}

export { Curiosity }