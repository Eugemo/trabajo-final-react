import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../components/vaccinations/Cards";
import {
  createVaccinationPlaces,
  deleteVaccinationPlaces,
  editVaccinationPlaces,
  loadVaccinationPlaces,
} from "../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../app/redux/selectors/placesSelector";


const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadVaccinationPlaces()),
  deletePlaces: (id) => dispatch(deleteVaccinationPlaces(id)),
  editPlaces: (id) => dispatch(editVaccinationPlaces(id)),
  createPlaces: (place) => dispatch(createVaccinationPlaces(place)),
});


export class Home extends Component {
  
  componentDidMount(){
    this.props.loadPlaces()
  }
  render() {
    return (      
      <div className="Home container d-flex justify-content-center  h-100">
       
        <div className="container d-flex justify-content-center align-items-center h-100">
          <Cards places={this.props.places} />
        </div>
       
      </div>
      
    );
  }
}
export default connect(mapStateToProps, mapActionsToProps)(Home);
