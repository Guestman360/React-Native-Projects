import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

// Provider can only have one child, but that one child can have many children of its own
const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack"/>
                <LibraryList>
                </LibraryList>
            </View>
        </Provider>
    );
}

export default App;