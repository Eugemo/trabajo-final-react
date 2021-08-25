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
      // <>
      //   <Container className="Home">
      //     <h1>Listado Puestos de Vacunacion</h1>         
      //     <Button color="success"  onClick={() => this.props.loadPlaces()} >
      //       Agregar Lugar
      //     </Button>
      //     <br />
      //     <br />         
      //     <Table className="table table-striped table-success aling-middle">
      //       <thead>
      //         <tr>
      //           <th>Lugar</th>
      //           <th>Direccion</th>
      //           <th>Latitud</th>
      //           <th>Longitud</th>
      //           <th>Url Imagen</th>
      //           <th>Acciones</th>                
      //         </tr>
      //       </thead>
      //       <tbody>
      //       {/* {places?.map(({ name, address, latitude, longitude, url }) => (
      //         <tr>
      //           <td>{name}</td>
      //           <td>{address}</td>
      //           <td>{latitude}</td>
      //           <td>{longitude}</td>
      //           <td>{url}</td>
      //         </tr>
      //       ))} */}
      //               <Button color="primary" size= 'xs'>
      //                 Modificar
      //               </Button>
      //               <Button color="danger"
      //                size= 'xs'                      
      //                onClick={() => this.props.deletePlaces("610f3b1f937bf440a04572e7")}>
      //                 Eliminar
      //               </Button>         
      //       </tbody>         
      //     </Table>
      //   </Container>
      // </>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(AdminView);