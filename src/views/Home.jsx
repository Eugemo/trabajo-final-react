import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../components/vaccinations/Cards";
import {
  deletePlacesAction,
  loadPlacesAction,
} from "../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../app/redux/selectors/placesSelector";


const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadPlacesAction()),
  deletePlaces: (id) => dispatch(deletePlacesAction(id)),
});

export class Home extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center  h-100 Home">
        {/* <p className="text">
          Conozca los lugares de Vacunacion contra el Covid-19 en La Rioja
          Capital
        </p> */}
        
        <div className="container d-flex justify-content-center align-items-center h-100">
          <Cards places={this.props.places} />
        </div>
        <button
          className="btn btn-success"
          onClick={() => this.props.loadPlaces()}
        >
          Cargar Lugares
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.deletePlaces("610f3b1f937bf440a04572e7")}
        >
          Borrar un lugar
        </button>
        
      </div>
      
    );
  }
}
export default connect(mapStateToProps, mapActionsToProps)(Home);
