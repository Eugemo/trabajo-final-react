import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createVaccinationPlaces, deleteVaccinationPlaces, editVaccinationPlaces, loadVaccinationPlaces } from '../../app/redux/actions/placesActions';
import {  } from '../../app/redux/actions/placesActions';
import { Button, Container } from 'react-bootstrap';
import { vaccinationPlaces } from '../../app/redux/selectors/placesSelector';

const mapStateToProps = (state) => ({
    places: vaccinationPlaces(state),
  });
  
  const mapActionsToProps = (dispatch) => ({
    loadPlaces: () => dispatch(loadVaccinationPlaces()),
    deletePlaces: (id) => dispatch(deleteVaccinationPlaces(id)),
    editPlaces: (id, place) => dispatch(editVaccinationPlaces(id, place)),
    createPlaces: (place) => dispatch(createVaccinationPlaces(place)),
  });

function EditPlace(props) {

    const [place, setPlace] = useState(props.place)

    const dispatch = useDispatch();

    useEffect(() => {
        setPlace(props.place)
    }, [props.place]
    )

    function updatePlace(e) {
        e.preventDefault()
        dispatch(editVaccinationPlaces(props))
        console.log(dispatch)
    }

    return (
        <Container className="Home">
        <div className="text">
            <div>Editar Lugares de Vacunacion</div>

            <div >
                <form onSubmit={updatePlace}>
                   
                    <div class="form-group">
                        <label>Nombre</label>
                        <div>
                            <input type='text'
                                value={place.name}
                                onChange={(e) => setPlace({ ...place, name: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Direccion</label>
                        <div class="form-group">
                            <input type='text'
                                value={place.address}
                                onChange={(e) => setPlace({ ...place, address: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Latitud</label>
                        <div>
                            <input type='text'
                                value={place.latitude}
                                onChange={(e) => setPlace({ ...place, latitude: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Longitud</label>
                        <div>
                            <input type='text'
                                value={place.longitude}
                                onChange={(e) => setPlace({ ...place, longitude: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Url de imagen</label>
                        <div>
                            <textarea
                                value={place.url}
                                onChange={(e) => setPlace({ ...place, url: e.target.value })}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <Button  type='submit'>
                            Guardar
                        </Button>
                    </div>

                </form>
            </div>

        </div>
        </Container>
    )
}

// const makeStateToProps = () => {
//     const place = getPlace();
//     return (state, props) => {
//         return {
//             place: place(state, props.match.params.id)
//         }
//     };
// }

export default connect(mapStateToProps, mapActionsToProps)(EditPlace);