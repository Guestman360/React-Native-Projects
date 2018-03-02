import React, { Component } from 'react'; // Do this for class based component
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        //console.log(this.state)
        return;
    }
}

// connect() function runs just before component renders and runs mapStateToProps to the store
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect()(LibraryList);