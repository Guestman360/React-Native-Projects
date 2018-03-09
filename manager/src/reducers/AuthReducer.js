import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: ''
 };

// {} means create new object, ... means take props of existing state, in other words A NEW STATE OBJECT! 
// toss new email value with payload into new state, so modify email prop wiht new data
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '' }
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed!' }
        default:
            return state;
    }
};