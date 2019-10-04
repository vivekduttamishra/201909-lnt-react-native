import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

import { connect } from 'react-redux';
import { noteSelect } from '../store/actions/action-creators';
import noteIcon from '../note-icon.png';

const styles = StyleSheet.create({
    container: {

    },
    listItem: {
        backgroundColor: 'black',
        borderBottomColor: 'white',
        borderWidth: 2,
        paddingBottom: 2,
        height: 40,
        flexDirection: 'row'
    },
    listText: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 10
    },
    image: {
        width: 30,
        height: 30
    }


});

const _component = (props) => {

    let renderItem = (e) => {
        let note=e.item;        
        return (
            <TouchableOpacity 
            style={styles.listItem} 
            key={`${note.id}`}
            
            onPress={()=>props.noteSelect(note)}
            
            >
                <Image source={noteIcon} style={styles.image} />
                <Text style={styles.listText}>{note.title}</Text>
            </TouchableOpacity>
        )
    };



    return (
        
        <FlatList data={props.notes} renderItem={renderItem} />
        
    );
};

const mapStateToProp = (state) => {
    return {
        notes: state.notes
    }
};

const mapActionsToProp = {
    noteSelect
};

export default connect(mapStateToProp, mapActionsToProp)(_component);