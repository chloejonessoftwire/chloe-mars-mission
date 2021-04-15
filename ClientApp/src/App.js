import React, { Component, useState, useEffect } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import './App.scss'

// export default class App extends Component {
  // const [darkTheme, setDarkTheme] = React.useState(false)
  // static displayName = App.name;

  // render () {
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
          <div className='button-container'>
            <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
              Toggle Theme
            </button>
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
