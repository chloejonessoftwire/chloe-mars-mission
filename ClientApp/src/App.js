import React, { Component, useState, useEffect } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { RoverSelection } from './components/RoverSelection/RoverSelection';
import { Curiosity } from './components/Rovers/Curiosity';
import { Opportunity } from './components/Rovers/Opportunity';
import { Spirit } from './components/Rovers/Spirit';
import { Perseverance } from './components/Rovers/Perseverance';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { News } from './components/News/News';
import { NasaTV } from './components/NasaTV/NasaTV';
import { FooterLight } from './components/Footer/FooterLight.js';
import { FooterDark } from './components/Footer/FooterDark.js';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import './App.scss'
import './ToggleSwitch/ToggleSwitch.scss'

require('dotenv').config()

const App = () =>  {
  const [darkTheme, setDarkTheme] = useState(getDefaultTheme);
 
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkTheme))
  }, [darkTheme])
  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem('dark'))
    return selectedTheme || false
  }

    return (
      <div className={darkTheme? 'dark-theme' : 'light-theme'}>
        <Layout>
          <div className='toggle-switch-div'>
            <ToggleSwitch id="toggleSwitch" checked={darkTheme} onChange={() => setDarkTheme(prevTheme => !prevTheme)} Name='dark-mode' data-yes="Dark" data-no="Light"/>
            <p text-align="center" >Dark Mode</p>
          </div>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route exact path='/rovers' component={RoverSelection}/>
          <Route exact path='/rovers/curiosity' component={Curiosity}/>
          <Route exact path='/rovers/spirit' component={Spirit}/>
          <Route exact path='/rovers/opportunity' component={Opportunity}/>
          <Route exact path='/rovers/perseverance' component={Perseverance}/>
          <Route path='/news' component={() => <News theme={darkTheme}/>} />
          <Route exact path='/nasa-tv' component={NasaTV}/>
          <AuthorizeRoute path='/fetch-data' component={FetchData} />
          <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
        </Layout>
        <div  className={darkTheme? 'hide' : 'display'}>
          <FooterLight/>
        </div>
        <div className={darkTheme? 'display' : 'hide'}>
          <FooterDark />
        </div>
      </div>
    );
}
export default App;
