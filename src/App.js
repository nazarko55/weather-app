import React from 'react';
import { Switch, Route } from "react-router-dom";
import SearchBar from '../src/components/SearchBar/SearchBar';
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Origin Weather Application</h1>

          <Switch>
            <Route path="search" exact component={SearchBar} />
            <Route path="/weather" component={WeatherDisplay} />
          </Switch>
        </div>
      </div>
    );
  }
}