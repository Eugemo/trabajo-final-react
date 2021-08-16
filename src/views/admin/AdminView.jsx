import React from "react";
import { Table, Button, Container } from "reactstrap";


export class AdminView extends React.Component {
  
  render() {
    return (
      <>
        <Container className="body-puestos Home">
          <h1>Listado Puestos de Vacunacion</h1>         
          <Button color="success" >
            Crear Puesto
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
                    <Button color="primary" size= 'xl'>
                      Modificar
                    </Button>
                    <Button color="danger">
                      Eliminar
                    </Button>         
            </tbody>         
          </Table>
        </Container>
      </>
    );
  }
}

export default AdminView