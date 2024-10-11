import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserChat = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.content}>
            <Text style={styles.name}>
              UserChat UserChat UserChat UserChat UserChat UserChat UserChat
              UserChat UserChat{' '}
            </Text>
          </View>
        </View>
        <View style={styles.mainView2}>
          <View style={styles.content2}>
            <Text style={styles.name}>
              UserChat UserChat UserChat UserChat UserChat UserChat UserChat
              UserChat UserChat{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.searchBarContainer}>
        <Input
          style={{color: '#fff'}}
          placeholder="Type here..."
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
  mainView: {
    padding: 7,
  },
  mainView2: {
    padding: 7,
    display:'flex',
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  content: {
    padding: 16,
    backgroundColor: '#abe4f3',
    width: '50%',
    borderRadius: 10,
  },
  content2: {
    padding: 16,
    backgroundColor: '#9cf1de',
    width: '50%',
    borderRadius: 10,
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
