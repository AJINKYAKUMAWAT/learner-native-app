import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../../../screens/chat/Chat';
import UserChat from '../../../screens/chat/UserChat';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const ChatTab = () => {
    const navigation = useNavigation();
    const route = useRoute();
    useEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === 'user-chat') {
          navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
          navigation.setOptions({ tabBarStyle: { display: 'flex' } });
        }
      }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="user-chat" component={UserChat} options={{ headerShown: true }}/>
    </Stack.Navigator>
  );
};

export default ChatTab;

const styles = StyleSheet.create({});
