import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserChat = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.name}>UserChat</Text>
        </View>
      </ScrollView>
      <View style={styles.searchBarContainer}>
        <Input
          style={{color: '#fff'}}
          placeholder="INPUT WITH ICON"
          rightIcon={{type: 'font-awesome', name: 'send', color: '#fff'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes sure the view takes the entire screen
  },
  scrollView: {
    paddingBottom: 80, // Adds some padding to avoid overlap with the search bar
  },
  content: {
    padding: 16,
  },
  name: {
    color: '#000',
  },
  searchBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
  },
});

export default UserChat;
