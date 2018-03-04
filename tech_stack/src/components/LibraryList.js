import React, { Component } from 'react'; // Do this for class based component
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        // Initialize datasource here
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2 
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) { // library is current item in list that is trying to render
        // library prop name next to ListItem is abitrary
        return <ListItem library={library} />; // this.props.library.title
    }

    render() {
        return(
            <ListView 
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

// connect() function runs just before component renders and runs mapStateToProps to the store
const mapStateToProps = state => {
    return { libraries: state.libraries };
};
// Connect mapStateToProps to Library List component
export default connect(mapStateToProps)(LibraryList);