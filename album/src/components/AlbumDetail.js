import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Whatever is passed here is props.children for CardSection tags (Referring to the Text tag with props.album.title)
const AlbumDetail = ({ album }) => { 
    // Destructuring looks like this
    const { title, artist, thumbnail_image, image } = album;
    const { 
        thumbnailStyle, 
        headercontentStyle,
        headerTextStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        source={{ uri: thumbnail_image }} 
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headercontentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View> 
            </CardSection>
            <CardSection>
                <Image 
                    source={{ uri: image }} 
                    style={imageStyle}
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headercontentStyle: {
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: { // Images must have size in order to show on screen
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: { 
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;