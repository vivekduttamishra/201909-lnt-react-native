import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const styles=StyleSheet.create({
    container:{

    }
});

import {connect} from 'react-redux';
//import {} from '../store/actions/action-creators';


const _component=(props)=>{
    return (
        <View style={styles.container}>
            <Text>Component</Text>
        </View>
    );
};

const mapStateToProp=(state)=>{
    return {
        ...state
    }
};

const mapActionsToProp={

};

export default connect(mapStateToProp, mapActionsToProp)(_component);