import './RoverSelection.scss'
import { RoverSummary } from "./RoverSummary/RoverSummary";
import roverData from "./roverData.json";
import { Link  } from 'react-router-dom';
import React, { useState } from "react";


enum Rovers {
  Curiosity,
  Opportunity,
  Spirit,
  Perseverance
}

function RoverSelection() {
  const [selectedRover, setSelectedRover] = useState(Rovers.Curiosity);

  return (
    <div className='RoverSelection'>
      <div className='top-page-break'/>
      <div className='imageicons'>  
        <img data-testid={"CuriosityButton"} className={selectedRover === Rovers.Curiosity ? 'selected-icon' : 'unselected-icon'} src={roverData.curiosity.imagesrc} alt='Curiosity Icon' width='100px' height='100px' onClick={() => setSelectedRover(Rovers.Curiosity)}/>
        <img data-testid={"OpportunityButton"} className={selectedRover === Rovers.Opportunity ? 'selected-icon' : 'unselected-icon'} src={roverData.opportunity.imagesrc} alt='Opportunity Icon' width='100px' height='100px' onClick={() => setSelectedRover(Rovers.Opportunity)}/>
        <img data-testid={"SpiritButton"} className={selectedRover === Rovers.Spirit ? 'selected-icon' : 'unselected-icon'} src={roverData.spirit.imagesrc} alt='Spirit Icon'  width='100px'  height='100px' onClick={() => setSelectedRover(Rovers.Spirit)}/>
        <img data-testid={"SpiritButton"} className={selectedRover === Rovers.Perseverance ? 'selected-icon' : 'unselected-icon'} src={roverData.perseverance.imagesrc} alt='Perseverance Icon'  width='100px'  height='100px' onClick={() => setSelectedRover(Rovers.Perseverance)}/>
      </div>
      <div className='roverCards'>
        <div data-testid={"CuriosityStats"} className={selectedRover === Rovers.Curiosity ? 'selected-pic': 'un-selectedpic'}>
          <RoverSummary rover={roverData.curiosity} />
          <Link to='/rovers/curiosity' className='Link'> Explore Curiosity Rover! </Link>
        </div>
        <div data-testid={"OpportunityStats"} className={selectedRover === Rovers.Opportunity ? 'selected-pic': 'un-selectedpic'}>
          <RoverSummary rover={roverData.opportunity}/>
          <Link to='/rovers/opportunity' className='Link'> Explore Opportunity Rover! </Link>
        </div>
        <div data-testid={"SpiritStats"} className={selectedRover === Rovers.Spirit ? 'selected-pic': 'un-selectedpic'}>
          <RoverSummary rover={roverData.spirit}/>
          <Link to='/rovers/spirit' className='Link'> Explore Spirit Rover! </Link>
        </div>
        <div data-testid={"PerseveranceStats"} className={selectedRover === Rovers.Perseverance ? 'selected-pic': 'un-selectedpic'}>
          <RoverSummary rover={roverData.perseverance}/>
          <Link to='/rovers/perseverance' className='Link'> Explore Perseverance Rover! </Link>
        </div>
      </div> 
    </div>
  )
}

export { RoverSelection }

