import React from 'react';
import { useState, useEffect } from "react";
import { RoverPhoto } from './RoverPhoto';



function Opportunity() {
    const [opportunityPhotoData, setOpportunityPhotoData] = useState(null);
    const [searchDate, setSearchDate] = useState("2004-01-26");
    const [submitDate, setSubmitDate] = useState("2004-01-26");
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?&earth_date=${submitDate}&camera=navcam&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setOpportunityPhotoData(data)
            })
    }, [submitDate]);

    function searchForNewDate() {
        setSubmitDate(searchDate)
    }
    if (!opportunityPhotoData) {
        return <div>Loading...</div>
    }
    const opportunityPhotos = opportunityPhotoData.photos.slice(0, 6);
    let photoAvailableBoolean = false;
    let displayDataJsx;
    if (opportunityPhotos.length > 0) {
        photoAvailableBoolean = true;
    }

    if (photoAvailableBoolean == true) {
        displayDataJsx = <RoverPhoto photoData={opportunityPhotos} />
    } else {
        displayDataJsx = <div>No photos available for this date. Please choose a different date. Opportunity rover has been on Mars from 2004-01-26 till 2018-06-10. Some dates may not have images.</div>
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

export { Opportunity }