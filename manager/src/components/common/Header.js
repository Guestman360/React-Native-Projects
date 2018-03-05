import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <SafeAreaView style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </SafeAreaView>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Exproting make sthis component available throughout app
export { Header };