import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

import {noteAdd} from '../store/actions/action-creators';

const styles=StyleSheet.create({
    container:{
        backgroundColor: 'lightblue'
    }, 
    heading: {
        fontSize: 50,
        textAlign: 'center',
        
        marginBottom: 20,
        //borderColor:'yellow',
        //borderWidth:3
    },
    button:{
        alignItems:'center'
    }
});

import {connect} from 'react-redux';
//import {} from '../store/actions/action-creators';


const _component=(props)=>{
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Notes</Text>
          <Button style={styles.button} 
                  title='add note' 
                  onPress={props.noteAdd}
                  />
        </View>
    );
};

const mapStateToProp=(state)=>{
    return {
        ...state
    }
};

const mapActionsToProp={
    noteAdd
};

export default connect(mapStateToProp, mapActionsToProp)(_component);