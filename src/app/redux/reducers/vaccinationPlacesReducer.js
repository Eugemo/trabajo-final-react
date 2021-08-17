import { LOAD_PLACES, DELETE_PLACES,GET_PLACES_OK, GET_PLACES_ERROR } from "../actions/placesActions"

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
        case DELETE_PLACES:
            return { ...state, places: state.places.filter(places => places._id !== action.payload)}
        default:
            return state
    }
}