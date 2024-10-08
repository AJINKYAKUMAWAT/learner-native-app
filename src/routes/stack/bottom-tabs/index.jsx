import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../../screens/home/Home';
import Chat from '../../../screens/chat/Chat';
import Profile from '../../../screens/profile/Profile';
import ChatIcon from '../../../components/Icons/ChatIcon';
import ProfileIcon from '../../../components/Icons/ProfileIcon';
import HomeIcon from '../../../components/Icons/HomeIcon';

const BottomTabs = createBottomTabNavigator();

const BottomTabsStack = () => {

  return (
    <BottomTabs.Navigator
      detachInactiveScreens={false}
      backBehavior={'firstRoute'}
      initialRouteName={'HomeScreen'}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: '#213578',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          display: route.name === "CartTab" ? "none" : "flex"
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}>
      <BottomTabs.Screen
        name={'HomeTab'}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <HomeIcon stroke={focused ? '#FFF' : '#747373'} />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name={'Chat'}
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <ChatIcon stroke={focused ? '#FFF' : '#747373'} />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name={'Profile'}
        component={Profile}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <ProfileIcon stroke={focused ? '#FFF' : '#747373'} />
            </View>
          ),
        }}
      />
    
    </BottomTabs.Navigator>
  );
};

export default BottomTabsStack;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 8,
    // marginLeft:2
  },
});
