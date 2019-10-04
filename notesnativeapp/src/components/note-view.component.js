import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native';
import {MODE_VIEW} from '../consts';
import {listMode} from '../store/actions/action-creators';
import Icon from 'react-native-vector-icons/Ionicons';

const styles=StyleSheet.create({
    container:{

    },
    title:{
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
    },
    body:{
        padding:10,
        fontSize:20,
        borderBottomColor:'gray',
        borderBottomWidth:4
    },
    tags:{
        fontStyle:'italic',
        fontSize:20,
        textAlign:"right",
        padding:5
    },
    buttonPanel:{
        margin:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    editButton:{
        backgroundColor:'gray',
        width:120,        
        height:40,
        margin:15,
        justifyContent:'center',
        

    },
    deleteButton:{
        flexDirection:'row',
        width:120,        
        height:40,
        margin:15,
        justifyContent:'center',
        alignItems:'center'
        
    },
    closeButton:{
        flexDirection:'row',
        width:120,        
        height:40,
        margin:15,
        
    },
    buttonTextStyle:{
        paddingLeft:5
    }



});

import {connect} from 'react-redux';
//import {} from '../store/actions/action-creators';


const _component=({selectedNote,mode,listMode})=>{
    if(!selectedNote || mode!==MODE_VIEW)
        return <View />;

    
    return (
        <Modal style={styles.container} visible={mode===MODE_VIEW} >
            <Text style={styles.title}>{selectedNote.title}</Text>
            <Text style={styles.body}>{selectedNote.title}</Text>
            <Text style={styles.tags}>{selectedNote.title}</Text>
            <View style={styles.buttonPanel}>
                <TouchableOpacity style={styles.editButton}>
                    
                    <Text style={styles.buttonTextStyle}>Edit</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.deleteButton}>
                    <Icon size={40} name='ios-trash'  color='red' />
                    <Text style={styles.buttonTextStyle}>Delete</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.closeButton} onPress={listMode}>
                    <Text style={styles.buttonTextStyle}>Close</Text>
                </TouchableOpacity> 
                
            </View>
        </Modal>
    );
};

const mapStateToProp=(state)=>{
    return {
        selectedNote:state.selectedNote,
        mode:state.mode
    }
};

const mapActionsToProp={
    listMode
};

export default connect(mapStateToProp, mapActionsToProp)(_component);