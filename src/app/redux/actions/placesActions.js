
export const LOAD_PLACES = "LOAD_PLACES";
export const DELETE_PLACES = "DELETE_PLACES";
export const GET_PLACES_OK = "GET_PLACES_OK";
export const GET_PLACES_ERROR = "GET_PLACES_ERROR";

const places = [
    {"_id":"610f3b1f937bf440a04572e7","name":"Soy el Arreglo","address":"Trucho esq Las Rosas","latitude":"-29.42109","longitude":"-66.85729","url":"https://lh3.googleusercontent.com/proxy/LeWguHM8pnvZSA12_Xfy2X9nRIkYiuNQ4Nlzbet2A7oI0P0naXMT6lV3bNgh2Qwi9cG08YcdYflFnQ_RXibGGyLCSwFKW0GW-kqA4Qgo_Yg","__v":0},{"_id":"610f3b7f937bf440a04572ea","name":"SUM Esc Polivalente","address":"Puerto Argentino B° Hospital","latitude":"-29.41494","longitude":"-66.84026","url":"http://fenix951.com.ar/Nuevo_2013/imagenes/198393_1624452728.jpg","__v":0}]

//generador de acciones
export const loadPlacesAction = () => ({type: LOAD_PLACES, payload: places})
export const getPlacessOk = (places) => ({ type: GET_PLACES_OK, payload: places });
export const getPlacesError = (err) => ({ type: GET_PLACES_ERROR, payload: err });
export const deletePlacesAction = (id) => ({type: DELETE_PLACES, payload: id})

