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
    </div>
  )
}
export { Home }
