import React, { Component } from 'react';
import { APOD } from './APOD';

import './Home.scss'

function Home() {
  return (
    <div>
      <APOD />
      <h2>Weather on Mars</h2>
      <div className='weather-widget'>
        <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' scrolling='no' frameborder='0'></iframe>
      </div>
      <h2>Track a Rover</h2>
      <p> Use the interactive map to track perserveances location since landing on Mars. </p>
      <div className='roverMap'>
        <iframe src='https://mars.nasa.gov/maps/location/?mission=M20&site=NOW' width='800' height='450' scrolling='no' frameborder='0' allowfullscreen></iframe>
      </div>
    </div>
  )
}
export { Home }
