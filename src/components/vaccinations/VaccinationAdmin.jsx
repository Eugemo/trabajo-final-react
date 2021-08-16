import { Component } from "react"

export class VaccinationAdminView extends Component{
  render() {
      return (
        <>
          <Modal isOpen="true">
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