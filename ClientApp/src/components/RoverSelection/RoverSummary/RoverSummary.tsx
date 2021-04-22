import React from "react";

interface RoverSummary {
  rover: {
    name: string,
    imagesrc: string,
    launchdate: string,
    speed: string,
    speedstars: string,
    size: string,
    sizestars: string,
    lifespan: string,
    lifespanstars: string,
    numberofcameras: number,
    numberofcamerasstars: string,
    weight: string,
    weightstars: string
  }
}

function RoverSummary(props: RoverSummary) {
  
  return (
    <div>
      <h2> {props.rover.name}</h2>
      <img className='roverImage' src={props.rover.imagesrc} width='200px' height='200px' alt='Image of Rover' />
      <h3> Stats:</h3>
      <table className='roverTable'>
        <tbody>
        <tr>
          <th>Launch Date</th>
          <th>{props.rover.launchdate}</th>
          <th></th> 
        </tr>
        <tr>
          <th>Speed</th>
          <th> {props.rover.speed} </th>
          <th> <img src={props.rover.speedstars} width='80px' alt='star rating'/> </th>
        </tr>
        <tr>
          <th>Size</th>
          <th> {props.rover.size} </th>
          <th> <img src={props.rover.sizestars} width='80px' alt='star rating'/> </th>
        </tr>
        <tr>
          <th>Life Span</th>
          <th> {props.rover.lifespan} </th>
          <th> <img src={props.rover.lifespanstars} width='80px' alt='star rating'/></th>
        </tr>
        <tr>
          <th>Number of Cameras</th>
          <th> {props.rover.numberofcameras} </th>
          <th><img src={props.rover.numberofcamerasstars} width='80px' alt='star rating'/></th>
        </tr>
        <tr>
          <th>Weight</th>
          <th> {props.rover.weight} </th>
          <th><img src={props.rover.weightstars} width='80px' alt='star rating'/></th>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export { RoverSummary }