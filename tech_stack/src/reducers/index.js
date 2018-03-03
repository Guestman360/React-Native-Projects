import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// libraries is a reducer that always returns an array
// Remeber! Reducers must always return something
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});