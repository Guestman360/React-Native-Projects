import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import FetchCoinData from './../Actions/FetchCoinData';

class CryptoContainer extends Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    render() {
        return (
            <View>
                <Text>Container</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}
// https://medium.com/react-native-training/tutorial-react-native-redux-native-mobile-app-for-tracking-cryptocurrency-bitcoin-litecoin-810850cf8acc
// connect() hooks up react components with redux state
export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);