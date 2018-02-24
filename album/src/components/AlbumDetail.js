import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Whatever is passed here is props.children for CardSection tags (Referring to the Text tag with props.album.title)
const AlbumDetail = ({ album }) => { 
    // Destructuring looks like this
    const { title, artist, thumbnail_image } = album;
    const { thumbnailStyle, headercontentStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image 
                        source={{ uri: thumbnail_image }} 
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headercontentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View> 
            </CardSection>
        </Card>
    );
};

const styles = {
    headercontentStyle: {
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle: { // Images must have size in order to show on screen
        height: 50,
        width: 50
    }
};

export default AlbumDetail;