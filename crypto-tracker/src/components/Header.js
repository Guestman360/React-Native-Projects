import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// This is a stateless componenet because it is just used to style, in this case the app's header
const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Cryptocurrency app
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 50,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    }
})

const { headerContainer, header } = styles;

// DONT FORGET TO EXPORT!!!
export default Header;