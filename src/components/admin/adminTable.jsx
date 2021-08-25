import React from "react";
import { Table, Button, Container } from "reactstrap";

function AdminTable ({ places }) {
  return (
    <Container className="Home">
    <h1>Listado Puestos de Vacunacion</h1>         
    <Button color="success"  onClick={() => this.props.loadPlaces()} >
      Agregar Lugar
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
            {places?.map(({ name, address, latitude, longitude, url }) => (
              <tr>
                <td>{name}</td>
                <td>{address}</td>
                <td>{latitude}</td>
                <td>{longitude}</td>
                <td>{url ? "Si" : "No"}</td>
                <td><Button color="primary" size= 'xs'>
                      Modificar
                    </Button>
                    <Button color="danger"
                     size= 'xs'                      
                     onClick={() => this.props.deletePlaces("610f3b1f937bf440a04572e7")}>
                      Eliminar
                    </Button> 
                </td>    
              </tr>
              ))}
            </tbody>
                
          </Table>
        </Container>
      
  );
}

export default AdminTable;
