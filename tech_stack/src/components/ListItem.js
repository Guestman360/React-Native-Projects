import React, { Component } from 'react'; 
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

// When you see this.props you're referring to props in the parent component
// Onpress is the () which returns => this.props.selectLibrary(id)
class ListItem extends Component {
    renderDescription() {
        if (this.props.library.id === this.props.selectedLibraryId) {
            return (
                <Text>{description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title, description } = this.props.library; // library from actions

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

// Called with our application state
const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
// first argument is ALWAYS mapStateToProps, can have multiple, if not needed declare null
// second argument is my whole actions object, actions are apssed to current component as props