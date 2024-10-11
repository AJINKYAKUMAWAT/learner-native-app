import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, Button, Icon, Avatar, Tab} from '@rneui/themed';
import PostCards from '../../components/PostCard';
import FriendList from '../../components/FriendList';

const Profile = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card.Image
            style={{padding: 0}}
            source={{
              uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <View style={styles.mainContainer}>
            <View style={styles.avatarContainer}>
              <Avatar
                containerStyle={styles.avatar}
                size={65}
                rounded
                source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
              />
            </View>
            <View style={styles.title}>
              <Text style={styles.titleText}>Ajinkya Kumawat</Text>
            </View>
          </View>
          <View>
            <Tab value={index} onChange={setIndex} dense>
              <Tab.Item>Posts</Tab.Item>
              <Tab.Item>Friends</Tab.Item>
              <Tab.Item>Photos</Tab.Item>
            </Tab>
          </View>
          {index === 0 && (
            <ScrollView>
              <PostCards />
            </ScrollView>
          )}
          {index === 1 && (
            <ScrollView>
              <FriendList />
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  avatar: {
    position: 'relative',
    top: -37,
    left: 20,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  avatarContainer: {
    width: '30%',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    padding: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 700,
  },
});

export default Profile;
