import React from 'react';
import { RoverTopPhoto } from './RoverTopPhoto';
import { useState, useEffect } from "react";

function RoverPhoto(props: any) {
    const [clickedImage, setClickedImage] = useState(props.photoData[0]);

    useEffect(() => {
        setClickedImage(props.photoData[0])
    }, [props])

    return (
        <div >
            <div>
                <RoverTopPhoto img_src={clickedImage.img_src} full_name={clickedImage.camera.full_name} earth_date={clickedImage.earth_date} sol={clickedImage.sol} />
            </div>
            <div className="img-rover-restofimages">
            
                {props.photoData.map((photo: any, index: any) => <img key={index} className={clickedImage === photo ? 'selected-img-rover-photo-list': 'img-rover-photo-list'} src={photo.img_src}
                    onClick={() => setClickedImage(photo)} />)}
               
            </div>
        </div>
    )
}

export { RoverPhoto }