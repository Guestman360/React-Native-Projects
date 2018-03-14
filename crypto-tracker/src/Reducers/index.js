import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

// Can access specific store by way of 'key-value pair'
export default combineReducers({
    crypto: CryptoReducer
});