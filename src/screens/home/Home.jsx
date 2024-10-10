import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text, Card} from '@rneui/themed';

const users = [
  {
    count: 2,
  },
  {
    count: 3,
  },
  {
    count: 5,
  },
  {
    count: 10,
  },
];

const Cards = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {users.map((u, i) => {
            return (
              <TouchableOpacity key={i} style={styles.cardContainer}>
                <Card>
                  <View style={styles.user}>
                    <Text style={styles.name}>{u.count}</Text>
                  </View>
                  <Text style={styles.name_bottom}>Room</Text>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '50%',
    marginBottom: 10,
  },
  user: {
    backgroundColor: '#000',
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: '#fff',
  },
  name_bottom: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
});

export default Cards;
