import { cargarLugares, borrarLugar, editarLugar, crearLugar } from "../../services/vacinationPlacesServices";

//Action Types
export const LOAD_PLACES = "LOAD_PLACES";
export const GET_PLACES_OK = "GET_PLACES_OK";
export const GET_PLACES_ERROR = "GET_PLACES_ERROR";

export const CREATE_PLACES_ACTION = "CREATE_PLACES_ACTION";
export const CREATE_PLACES_OK = "CREATE_PLACES_OK";
export const CREATE_PLACES_ERROR = "CREATE_PLACES_ERROR";

export const EDIT_PLACES_ACTION = "EDIT_PLACES_ACTION";
export const EDIT_PLACES_OK = "EDIT_PLACES_OK";
export const EDIT_PLACES_ERROR = "EDIT_PLACES_ERROR";

export const DELETE_PLACES_ACTION = "DELETE_PLACES_ACTION";
export const DELETE_PLACES_OK = "DELETE_PLACES_OK";
export const DELETE_PLACES_ERROR = "DELETE_PLACES_ERROR";

//Action Generator
export const loadPlacesAction = (places) => ({type: LOAD_PLACES, payload: places});
export const getPlacesOk = (places) => ({ type: GET_PLACES_OK, payload: places });
export const getPlacesError = (err) => ({ type: GET_PLACES_ERROR, payload: err });

export const createPlacesAction = (placeData) => ({type: CREATE_PLACES_ACTION, payload: placeData});
export const createPlacesActionOk = (placeData) => ({type: CREATE_PLACES_OK, payload: placeData});
export const createPlacesError = (err) => ({type: CREATE_PLACES_ERROR, payload: err});

export const editPlacesAction = (id, place) => ({type: EDIT_PLACES_ACTION, payload: id, place});
export const editPlacesActionOk = (id, place) => ({type: EDIT_PLACES_OK, payload: id, place});
export const editPlacesError = (err) => ({type: EDIT_PLACES_ERROR, payload: err});

export const deletePlacesAction = (id) => ({type: DELETE_PLACES_ACTION, payload: id});
export const deletePlacesActionOk = (id) => ({type: DELETE_PLACES_OK, payload: id});
export const deletePlacesError = (err) => ({type: DELETE_PLACES_ERROR, payload: err});

// Use Action with redux Thunk
export const loadVaccinationPlaces = () => {
        return async (dispatch) => {
          try {
            const places = await cargarLugares();
            console.log({places})
            dispatch(loadPlacesAction(places));
          } catch(err) {
            console.log(err);
            const { message } = err;
            dispatch(getPlacesError(message));
          }
        };
};
  
export const deleteVaccinationPlaces = (id) => {
  return async (dispatch) => {
    try {
      const places = await borrarLugar(id);
      console.log({places})
      dispatch(deletePlacesAction(id));
    } catch(err) {
      console.log(err);
      const { message } = err;
      dispatch(getPlacesError(message));
    }
  };
};

export const editVaccinationPlaces = (id, place) => {
  return async (dispatch) => {
    try {
      const places = await editarLugar(id, place);
      console.log({places})
      dispatch(editPlacesAction(id, place));
    } catch(err) {
      console.log(err);
      const { message } = err;
      dispatch(getPlacesError(message));
    }
  };
};

export const createVaccinationPlaces = (placesData) => {
  return async (dispatch) => {
    try {
      const places = await crearLugar(placesData);
      console.log({places})
      dispatch(createPlacesAction(placesData));
    } catch(err) {
      console.log(err);
      const { message } = err;
      dispatch(getPlacesError(message));
    }
  };
};
