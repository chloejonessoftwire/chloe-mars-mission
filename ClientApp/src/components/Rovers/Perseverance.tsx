import React from 'react';
import { useState, useEffect } from "react";
import { RoverPhoto } from './RoverPhoto';


function Perseverance() {
    const [perseverancePhotoData, setPerseverancePhotoData] = useState(null);
    const [searchDate, setSearchDate] = useState("2021-02-18");
    const [submitDate, setSubmitDate] = useState("2021-02-18");
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?&earth_date=${submitDate}&camera=navcam&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setPerseverancePhotoData(data)
            })
    }, [submitDate]);

    function searchForNewDate() {
        setSubmitDate(searchDate)
    }

    if (!perseverancePhotoData) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const perseverancePhotos = perseverancePhotoData.photos.slice(0, 6);
    let photoAvailableBoolean = false;
    let displayDataJsx;
    if (perseverancePhotos.length > 0) {
        photoAvailableBoolean = true;
    }

    if (photoAvailableBoolean == true) {
        displayDataJsx = <RoverPhoto photoData={perseverancePhotos} />
    } else {
        displayDataJsx = <div>No photos available for this date. Please choose a different date. Perseverance rover has been on Mars since 2021-02-18. Some dates may not have images. </div>
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

export { Perseverance }