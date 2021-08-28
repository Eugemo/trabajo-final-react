import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import { NavBar } from './components/common/NavBar';
import AdminView from './views/admin/AdminView';
import Footer from './components/common/Footer';
import VaccinationPlace from './views/vaccinations/VaccinationPlace';
import CreatePlace from './views/admin/CreatePlace';
import EditPlace from './views/admin/EditPlace';

class App extends Component {
  
  render(){
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/places/:id" component={VaccinationPlace} />
          <Route exact path="/newPlace" component={CreatePlace} />
          <Route exact path="/editPlace" component={EditPlace} />
          <Route exact path="/admin" component={AdminView} />                  
        </Switch>      
      <Footer />
      </>
    )
  }
}

export default App;
