import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // this is middleware, must import from reduc above to use
import reducers from './reducers';
import LoginForm from './components/LoginForm';

// Add file path of this file to project index.js file
// https://github.com/mrbrackins/ManagerApp/blob/master/src/Router.js
class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC9w9DEIzzOzXRZ26uUwHtq9y061NGe13Q',
            authDomain: 'manager-2f32d.firebaseapp.com',
            databaseURL: 'https://manager-2f32d.firebaseio.com',
            projectId: 'manager-2f32d',
            storageBucket: 'manager-2f32d.appspot.com',
            messagingSenderId: '766569798599'
          };
        firebase.initializeApp(config);
    }

    render() {
        // create the store with reducers and apply async middleware 
        // redux thunk (allows you to write action creators that return a function instead of an action.)
        // IMPORTANT! - can never mutate store, just create new copy of it with updated data
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;