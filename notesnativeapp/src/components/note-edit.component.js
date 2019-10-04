import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {noteSave} from '../store/actions/action-creators';

const styles = StyleSheet.create({
    container: {

    },
    heading: {
        textAlign: 'center',
        fontSize: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    titleTextBox: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgray',
        fontSize: 24
    },
    bodyTextBox: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgray',
        fontSize: 14,
        height: 100
    },
    tagsTextBox: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgray',
        fontSize: 14


    },
    addButtonTextBox: {
        color: 'red',
        backgroundColor: 'red'
    }
});

class _component extends React.Component {
    state={title:'',body:'',tags:''};

    onTitleChange=(title)=>{
        //console.log(title);
        this.setState({title})
    };

    onBodyChange=(body)=>{
        this.setState({body});
    }

    onTagsChange=(tags)=>{
        this.setState({tags});
    }



    render = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>New Note</Text>

                <TextInput
                    style={styles.titleTextBox}
                    placeholder='Note Title'
                    value={this.state.title}
                    onChangeText={this.onTitleChange}
                />

                <TextInput
                    multiline={true}
                    style={styles.bodyTextBox}
                    placeholder='You Actual Note Here'
                    value={this.state.body}
                    onChangeText={this.onBodyChange}
                />

                <TextInput
                    style={styles.tagsTextBox}
                    placeholder='Tags'
                    value={this.state.tags}
                    onChangeText={this.onTagsChange}
                />

                <Button title='Add'
                    style={styles.addButtonTextBox}
                    color='green'
                    onPress={()=>this.props.noteSave(null,this.state)}
                />
            </View>
        );
    };
}

const actions={
    noteSave
}

export default connect(null,actions)( _component);