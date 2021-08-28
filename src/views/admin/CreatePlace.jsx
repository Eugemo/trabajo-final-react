import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVaccinationPlaces, deleteVaccinationPlaces, editVaccinationPlaces, loadVaccinationPlaces } from '../../app/redux/actions/placesActions';
import { Card, Button, Container } from 'react-bootstrap';
import { connect } from "react-redux";
import { vaccinationPlaces } from '../../app/redux/selectors/placesSelector';

const mapStateToProps = (state) => ({
    places: vaccinationPlaces(state),
  });
  
  const mapActionsToProps = (dispatch) => ({
    loadPlaces: () => dispatch(loadVaccinationPlaces()),
    deletePlaces: (id) => dispatch(deleteVaccinationPlaces(id)),
    editPlaces: (id) => dispatch(editVaccinationPlaces(id)),
    createPlaces: (placeData) => dispatch(createVaccinationPlaces(placeData)),
  });
  
function CreatePlace(props) {
    const id = '';
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [url, setUrl] = useState('');

    const dispatch = useDispatch();

    function onCreatePlace(e) {
        e.preventDefault();
        const placeData = {
            id,
            name,
            address,
            latitude,
            longitude,
            url,
        };

        dispatch(createVaccinationPlaces(placeData));
    }

    return (
        <Container className="Home h-60">
            <div className="text">
                <h2>Agregar Lugar de Vacunación</h2>
            </div>
            <div class="item-align-center justify-content-center">
            <Card style={{ width: '50rem', height: 400, marginTop: '50px', marginLeft: '250px' }} class="text-center">
                <div class="container mt-10">
                    <div class="mt-3">
                        <form onSubmit={onCreatePlace}>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Nombre</span>
                                    </div>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Dirección</span>
                                    </div>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Latitud</span>
                                    </div>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                                        value={latitude}
                                        onChange={(e) => setLatitude(e.target.value)}
                                    ></input>
                                </div>
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Longitud</span>
                                    </div>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                                        value={longitude}
                                        onChange={(e) => setLongitude(e.target.value)}
                                    ></input>
                                </div>
                            </div>                           
                            
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div type='text' class="input-group-prepend" >
                                        <span class="input-group-text" id="basic-addon3">Url de imagen</span>
                                    </div>
                                    <textarea
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}>
                                    </textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 col-3 mb-2">
                                    <Button variant="danger" class="text-decoration-none text-white">
                                        <Link to='/admin' className='' class="text-decoration-none text-white">Cancelar</Link>
                                    </Button>
                                </div>
                                <div class="col-4 ml-3 mb-2">
                                    <Button variant="success" type="submit" class="text-decoration-none text-white">
                                    <Link to='/admin' className='' class="text-decoration-none text-white">Aceptar</Link> 
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
        
        </Container>
    )
}

export default connect(mapStateToProps, mapActionsToProps)(CreatePlace);