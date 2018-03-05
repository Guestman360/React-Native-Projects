import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// size in activity indicator is part of library but size right after Spinner const is arbitrary
const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };