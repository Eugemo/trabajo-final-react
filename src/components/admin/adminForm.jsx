import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, ModalHeader } from "reactstrap";
import {
  deletePlacesAction,
  loadVaccinationPlaces,
} from "../../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../../app/redux/selectors/placesSelector";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadVaccinationPlaces()),
  deletePlaces: (id) => dispatch(deletePlacesAction(id)),
});


export class AdminForm extends Component {
  
  componentDidMount() {
    this.props.loadPlaces()
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
                  <label>Latitud</label>
                  <input />
                </FormGroup>
                <FormGroup>
                  <label>Longitud</label>
                  <input />
                </FormGroup>        
                <FormGroup>
                  <label>Url Imagen</label>
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