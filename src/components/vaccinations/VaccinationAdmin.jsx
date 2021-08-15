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
                <label>Posicion:</label>
                <input />
              </FormGroup>

              <FormGroup>
                <label>Empresa:</label>
                <select>
                  <option value="">Elija Empresa</option>
                </select>
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