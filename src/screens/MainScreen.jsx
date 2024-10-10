import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsStack from '../routes/stack/bottom-tabs';
import LoginScreeen from '../auth/Login';
import OtpScreen from '../auth/OtpScreen';
import { CustomStatusBar } from '../components/CustomStatusBar';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  const isLoggedIn = true;


  return (
    <CustomStatusBar>
      {isLoggedIn ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Homescreen" component={BottomTabsStack} />
          </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginScreen" component={LoginScreeen} />
          <Stack.Screen name="OtpScreens" component={OtpScreen} />
        </Stack.Navigator>
      )}
    </CustomStatusBar>
  );
};

export default MainScreen;
