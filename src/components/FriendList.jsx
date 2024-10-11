import React from 'react';
import {View, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, Card} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
];

const FriendList = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={styles.cardStyle}>
            {users.map((u, i) => {
              return (
                <View key={i}>
                  <TouchableOpacity style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{uri: u.avatar}}
                    />
                    <View style={styles.chatView}>
                      <Text style={styles.name}>{u.name}</Text>
                    </View>
                  </TouchableOpacity>
                  {/* Move the divider outside the TouchableOpacity */}
                  <Card.Divider />
                </View>
              );
            })}
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:20
  },
  cardStyle:{
    borderRadius:10
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
    padding: 2,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius:5
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '600', // Change fontWeight to a string
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  chatView: {
    flexDirection: 'column',
  },
});

export default FriendList;
