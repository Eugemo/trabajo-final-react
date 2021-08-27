import React from "react";
import { Table, Button, Container } from "reactstrap";
import { connect } from "react-redux";
import {
  deleteVaccinationPlaces,
  editVaccinationPlaces,
  loadVaccinationPlaces,
  createVaccinationPlaces
} from "../../app/redux/actions/placesActions";
import { vaccinationPlaces } from "../../app/redux/selectors/placesSelector";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = (state) => ({
  places: vaccinationPlaces(state),
});

const mapActionsToProps = (dispatch) => ({
  loadPlaces: () => dispatch(loadVaccinationPlaces()),
  deletePlaces: (id) => dispatch(deleteVaccinationPlaces(id)),
  editPlaces: (id) => dispatch(editVaccinationPlaces(id)),
  createPlaces: (place) => dispatch(createVaccinationPlaces(place)),
});


function AdminTable ({ places, deletePlaces, editPlaces, createPlaces }) {
    
  return (
    <Container className="Home">
    <h1>Listado Puestos de Vacunacion</h1>         
    {/* <Button color="success"  onClick={() => createPlaces()} >
     Nuevo Lugar  .<FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
    </Button> */}
    <Link className="btn btn-success border-2"
          to={`/newPlace`}
          >Nuevo Lugar  .<FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon></Link>
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
            <tbody key={'_id'}>
            {places?.map(({ _id, name, address, latitude, longitude, url }) => (
              <tr>
                <td>{name}</td>
                <td>{address}</td>
                <td>{latitude}</td>
                <td>{longitude}</td>
                <td>{url ? "Si" : "No"}</td>
                <td><Link
                  className="btn btn-primary border-2"
                  to={`/places/${_id}`}
                ><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
                {" "}
                <Link
                  className="btn btn-danger border-2"
                  to={`/places/${_id}`}
                ><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Link>
                  {/* <Button color="primary"
                    onClick={() => editPlaces(_id)}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </Button> 
                    {" "}
                    <Button color="danger"
                     onClick={() => deletePlaces(_id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button> */}
                </td>    
              </tr>
              ))}
            </tbody>
                
          </Table>
        </Container>
      
  );
}

export default connect(mapStateToProps, mapActionsToProps)(AdminTable);
