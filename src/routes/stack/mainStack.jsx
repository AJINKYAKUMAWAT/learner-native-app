import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsStack from './bottom-tabs';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'BottomStack'}
        component={BottomTabsStack}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
