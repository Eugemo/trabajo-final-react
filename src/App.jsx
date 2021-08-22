import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import { NavBar } from './components/common/NavBar';
import AdminView from './views/admin/AdminView';
import Footer from './components/common/Footer';
import {MapView} from './views/map/MapView';

class App extends Component {
  
  render(){
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={AdminView} />
          <Route exact path="/map" component={MapView} />
        </Switch>      
      <Footer />
      </>
    )
  }
}

export default App;
