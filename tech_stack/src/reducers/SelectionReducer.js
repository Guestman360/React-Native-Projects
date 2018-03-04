export default (state = null, action) => { // must return value that is not undefiined
    switch(action.type) {
        case 'select_library':
            return action.payload;
        default:
            // return the previous state
            return state;
    }
};
// this is typical boilerplate for reducer actions