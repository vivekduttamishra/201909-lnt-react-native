import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Modal,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {noteSave} from '../store/actions/action-creators';

import {MODE_EDIT,MODE_NEW,MODE_VIEW, MODE_LIST} from '../consts';

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

    componentWillReceiveProps(props){
        this.setState({...props});
    }

    render = () => {
        let mode=this.props.mode;
        console.log('mode in note edit',mode);
        if (mode!==MODE_EDIT && mode!==MODE_NEW)
              return <View/>

        return (
            <Modal style={styles.container} visible={mode===MODE_EDIT || mode===MODE_NEW}>
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
            </Modal>
        );
    };
}

const mapStateToProps=state=>{
    return  {
        mode:state.mode,
        selectedNote:state.selectedNote
    }
}

const actions={
    noteSave
}

export default connect(mapStateToProps,actions)( _component);