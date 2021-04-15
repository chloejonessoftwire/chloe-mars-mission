import React, { Component, useState, useEffect } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import './App.scss'
import './ToggleSwitch/ToggleSwitch.scss'


const App = () =>  {
  const [darkTheme, setDarkTheme] = useState(getDefaultTheme);
  const [toggle, setToggle] = useState(false);
  let [checked, setChecked] = useState(false);

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
            <p> Dark Mode </p>
          </div>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <AuthorizeRoute path='/fetch-data' component={FetchData} />
          <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
        </Layout>
      </div>
    );
}

export default App;
