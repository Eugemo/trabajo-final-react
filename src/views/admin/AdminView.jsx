import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deletePlacesAction,
  loadVaccinationPlaces,
} from "../../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../../app/redux/selectors/placesSelector";
import AdminTable from "../../components/admin/adminTable";

const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadVaccinationPlaces()),
  deletePlaces: (id) => dispatch(deletePlacesAction(id)),
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