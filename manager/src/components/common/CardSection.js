import React from 'react';
import { View } from 'react-native';

// https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891
const CardSection = (props) => { // Use props.children when 'compnenets don’t know their children ahead of time'
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };