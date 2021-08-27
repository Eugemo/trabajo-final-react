import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createVaccinationPlaces,
  deleteVaccinationPlaces,
  editVaccinationPlaces,
  loadVaccinationPlaces,
} from "../../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../../app/redux/selectors/placesSelector";
import AdminTable from "../../components/admin/adminTable";

const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadVaccinationPlaces()),
  deletePlaces: (id) => dispatch(deleteVaccinationPlaces(id)),
  editPlaces: (id) => dispatch(editVaccinationPlaces(id)),
  createPlaces: (place) => dispatch(createVaccinationPlaces(place)),
});


export class AdminView extends Component {
 
  componentDidMount(){
    this.props.loadPlaces()
  }
  render() {
    return (
      <AdminTable places={this.props.places}/>
      
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(AdminView);