import { combineReducers } from 'redux';

// libraries is a reducer that always returns an array
// Remeber! Reducers must always return something
export default combineReducers({
    libraries: () => []
});