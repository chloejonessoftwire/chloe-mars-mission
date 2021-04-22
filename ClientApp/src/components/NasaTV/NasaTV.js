import React, { Component } from 'react';

import './NasaTV.scss'

function NasaTV() {
  return (
    <div>
      <div className='top-page-break'/>
      <h1>Nasa TV</h1>
      <div className='wrap-element' >
        <iframe  className='wrapped-iframe' width='100%' height='600px'  src="https://www.youtube.com/embed/21X5lGlDOfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
   
  )
}
export { NasaTV }
