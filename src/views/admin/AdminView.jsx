import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deletePlacesAction,
  loadVaccinationPlaces,
} from "../../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../../app/redux/selectors/placesSelector";
import { Table, Button, Container } from "reactstrap";


const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadVaccinationPlaces()),
  deletePlaces: (id) => dispatch(deletePlacesAction(id)),
});


export class AdminView extends Component {
  
  render() {
    return (
      <>
        <Container className="Home">
          <h1>Listado Puestos de Vacunacion</h1>         
          <Button color="success"  onClick={() => this.props.loadPlaces()} >
            mostrar Puestos
          </Button>
          <br />
          <br />         
          <Table className="table table-striped table-success aling-middle">
            <thead>
              <tr>
                <th>Id</th>
                <th>Lugar</th>
                <th>Direccion</th>
                <th>Latitud</th>
                <th>Longitud</th>
                <th>Url</th>
                <th>Acciones</th>                
              </tr>
            </thead>
            <tbody>
                    <Button color="primary" size= 'xs'>
                      Modificar
                    </Button>
                    <Button color="danger"
                     size= 'xs'                      
                     onClick={() => this.props.deletePlaces("610f3b1f937bf440a04572e7")}>
                      Eliminar
                    </Button>         
            </tbody>         
          </Table>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(AdminView);