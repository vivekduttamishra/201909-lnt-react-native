import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import NoteEdit from './components/note-edit.component';
import NoteList from './components/note-list.component';
import NoteView from './components/note-view.component';
import AppHeader from './components/header.component';

import { getAllNotes } from './store/actions/action-creators';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    //borderColor:'orange',
    //borderWidth:3,
    //padding:10
    flex: 1
  },

  body: {
    //borderColor:'red',
    //borderWidth:3,
    padding: 5,
    flex: 1

  },
  item: {
    fontSize: 30,
    //borderBottomWidth:1
  },

});

class _component extends React.Component {

  componentDidMount = () => {
    this.props.getAllNotes();
  }

  render = () => {
    return (
      <View style={styles.container} >
        <AppHeader />
        <View style={styles.body}>
          <NoteEdit/>
          <NoteView/>
          <NoteList />
        </View>
      </View>

    );
  };
}

const mapActions = {
  getAllNotes
}

export default connect(null, mapActions)(_component);

