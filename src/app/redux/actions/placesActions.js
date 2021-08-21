import { cargarLugares } from "../../services/vacinationPlacesServices";

//Action Types
export const LOAD_PLACES = "LOAD_PLACES";
export const DELETE_PLACES = "DELETE_PLACES";
export const GET_PLACES_OK = "GET_PLACES_OK";
export const GET_PLACES_ERROR = "GET_PLACES_ERROR";

// const places = [
//     {"_id":"610f3b7f937bf440a04572ea","name":"SUM Esc Polivalente","address":"Puerto Argentino B° Hospital","latitude":"-29.41494","longitude":"-66.84026","url":"http://fenix951.com.ar/Nuevo_2013/imagenes/198393_1624452728.jpg","__v":0},{"_id":"610f3b7f937bf440a04572ea","name":"SUM Esc Polivalente","address":"Puerto Argentino B° Hospital","latitude":"-29.41494","longitude":"-66.84026","url":"http://fenix951.com.ar/Nuevo_2013/imagenes/198393_1624452728.jpg","__v":0},{"_id":"610f3b7f937bf440a04572ea","name":"SUM Esc Polivalente","address":"Puerto Argentino B° Hospital","latitude":"-29.41494","longitude":"-66.84026","url":"http://fenix951.com.ar/Nuevo_2013/imagenes/198393_1624452728.jpg","__v":0},{"_id":"610f3b7f937bf440a04572ea","name":"SUM Esc Polivalente","address":"Puerto Argentino B° Hospital","latitude":"-29.41494","longitude":"-66.84026","url":"http://fenix951.com.ar/Nuevo_2013/imagenes/198393_1624452728.jpg","__v":0}]

//Action Generator
export const loadPlacesAction = (places) => ({type: LOAD_PLACES, payload: places});
export const getPlacesOk = (places) => ({ type: GET_PLACES_OK, payload: places });
export const getPlacesError = (err) => ({ type: GET_PLACES_ERROR, payload: err });

export const deletePlacesAction = (id) => ({type: DELETE_PLACES, payload: id});

// Use Action with redux Thunk
export const loadVaccinationPlaces = () => {
        return async (dispatch) => {
          try {
            const places = await cargarLugares();
            console.log({places})
            dispatch(loadPlacesAction(places));
          } catch(err) {
            console.log(err);
            // const { message } = err;
            // dispatch(getPlacesError(message));
          }
        };
};
      
