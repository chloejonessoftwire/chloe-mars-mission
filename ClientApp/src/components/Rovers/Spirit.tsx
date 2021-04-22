import React from 'react';
import { useState, useEffect } from "react";
import { RoverPhoto } from './RoverPhoto';


function Spirit() {
    const [spiritPhotoData, setSpiritPhotoData] = useState(null);
    const [searchDate, setSearchDate] = useState("2004-01-05");
    const [submitDate, setSubmitDate] = useState("2004-01-05");
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?&earth_date=${submitDate}&camera=navcam&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setSpiritPhotoData(data)
            })
    }, [submitDate]);

    function searchForNewDate() {
        setSubmitDate(searchDate)
    }

    if (!spiritPhotoData) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const spiritPhotos = spiritPhotoData.photos.slice(0, 6);
    let photoAvailableBoolean = false;
    let displayDataJsx;
    if (spiritPhotos.length > 0) {
        photoAvailableBoolean = true;
    }

    if (photoAvailableBoolean == true) {
        displayDataJsx = <RoverPhoto photoData={spiritPhotos} />
    } else {
        displayDataJsx = <div>No photos available for this date. Please choose a different date. Spirit rover has been on Mars from 2004-01-05 till 2010-03-22. Some dates may not have images.</div>
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

export { Spirit }