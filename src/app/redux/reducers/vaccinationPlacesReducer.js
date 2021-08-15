import { LOAD_PLACES, DELETE_PLACES } from "../actions/placesActions"

const initialState = {
    places: []
}
export const vaccinatiosPlacesReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_PLACES:
            return { ...state, places: action.payload }
        case DELETE_PLACES:
            return { ...state, places: state.places.filter(places => places._id !== action.payload)}
        default:
            return state
    }
}