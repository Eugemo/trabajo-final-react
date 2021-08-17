import axios from 'axios';
import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, ModalHeader } from "reactstrap";
import {
  deletePlacesAction,
  loadPlacesAction,
} from "../../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../../app/redux/selectors/placesSelector";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadPlacesAction()),
  deletePlaces: (id) => dispatch(deletePlacesAction(id)),
});


const url = process.env.REACT_APP_API_BASE_URL;

export class AdminForm extends Component {
  state={
    places:[]
  }
   placesGet=()=>{
     axios.get(url).then(response=>(console.log(response.places)))
   }
   componentDidMount() {
     this.placesGet()
   }

    render() {
        return (
          <>
            <Modal >
              <ModalHeader>
                <div>
                  <h3>Insertar Puesto</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <label>Dirección</label>
                  <input />
                </FormGroup>
                <FormGroup>
                  <label>Longitud</label>
                  <input />
                </FormGroup>        
                <FormGroup>
                  <label>Descripcion:</label>
                  <input/>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                 >
                  Insertar
                </Button>
                <Button className="btn btn-danger" >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          </>
        );
      }
}

export default connect(mapStateToProps, mapActionsToProps)(AdminForm);