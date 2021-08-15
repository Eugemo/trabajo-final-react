import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { vaccinatiosPlacesReducer } from './vaccinationPlacesReducer';

const initialState = {}
const root = (state = initialState, action) => {
    return state
}

export default combineReducers({
    root,
    usersReducer,
    vaccinatiosPlacesReducer
})