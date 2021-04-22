import React from 'react';

interface RoverPhoto {
    img_src: string;
    full_name: string;
    earth_date: string;
    sol: string
}

function RoverTopPhoto(props: RoverPhoto) {
    return (
        <div >
            <div className="top-rover-div">
                <img className="img-rover-top" src={props.img_src} />
                <h5>
                    Camera: {props.full_name} <br/>
                    Earth date : {props.earth_date} <br/>
                    Sol Days on Mars: {props.sol} <br/>
                </h5>
            </div>
        </div>
    )
}

export { RoverTopPhoto }