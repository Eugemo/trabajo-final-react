import React from "react";
import { Table, Button, Container } from "reactstrap";
import { connect } from "react-redux";
import {
  deletePlacesAction,
  loadVaccinationPlaces,
} from "../../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../../app/redux/selectors/placesSelector";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadVaccinationPlaces()),
  deletePlaces: (id) => dispatch(deletePlacesAction(id)),
});


function AdminTable ({ places }) {
    
  return (
    <Container className="Home">
    <h1>Listado Puestos de Vacunacion</h1>         
    <Button color="success"  onClick={() => this.props.loadPlaces()} >
     Nuevo Lugar  .<FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
    </Button>
    <br />
          <br />         
          <Table className="table table-striped table-success aling-middle">
          <thead>
              <tr>
                <th>Lugar</th>
                <th>Direccion</th>
                <th>Latitud</th>
                <th>Longitud</th>
                <th>Imagen</th>
                <th>Acciones</th>                
              </tr>
            </thead>
            <tbody>
            {places?.map(({ _id, name, address, latitude, longitude, url }) => (
              <tr>
                <td>{name}</td>
                <td>{address}</td>
                <td>{latitude}</td>
                <td>{longitude}</td>
                <td>{url ? "Si" : "No"}</td>
                <td><Button color="primary"
                    onClick={() => this.props.deletePlaces({_id})}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </Button>{" "}
                    <Button color="danger"
                     onClick={() => this.props.deletePlaces({_id})}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </Button> 
                </td>    
              </tr>
              ))}
            </tbody>
                
          </Table>
        </Container>
      
  );
}

export default connect(mapStateToProps, mapActionsToProps)(AdminTable);
