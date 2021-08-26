import { LOAD_PLACES, GET_PLACES_OK, GET_PLACES_ERROR, 
    CREATE_PLACES_ACTION, CREATE_PLACES_OK, CREATE_PLACES_ERROR,
    EDIT_PLACES_ACTION, EDIT_PLACES_OK, EDIT_PLACES_ERROR,
    DELETE_PLACES_ACTION, DELETE_PLACES_OK, DELETE_PLACES_ERROR
 } from "../actions/placesActions"

const initialState = {
    loading: false,
    places: [],
    error: null
}
export const vaccinatiosPlacesReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_PLACES:
            return { ...state, loaging: true, places: action.payload, error: null }
        case GET_PLACES_OK:
            return { ...state, loading: false, places: action.payload };
        case GET_PLACES_ERROR:
            return { ...state, loading: false, error: action.payload };
        case CREATE_PLACES_ACTION:
            return { ...state, loaging: true, places: action.payload, error: null  };
        case CREATE_PLACES_OK:
            return { };
        case CREATE_PLACES_ERROR:
            return { ...state, loading: false, error: action.payload };    
        case EDIT_PLACES_ACTION:
            return { };
        case EDIT_PLACES_OK:
            return { };
        case EDIT_PLACES_ERROR:
            return { ...state, loading: false, error: action.payload };      
        case DELETE_PLACES_ACTION:
            return { ...state, places: state.places.filter(places => places._id !== action.payload)}
        case DELETE_PLACES_OK:
            return { };
        case DELETE_PLACES_ERROR:
            return { ...state, loading: false, error: action.payload };    
        default:
            return state
    }
}