import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Whatever is passed here is props.children for CardSection tags (Referring to the Text tag with props.album.title)
const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text> 
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;