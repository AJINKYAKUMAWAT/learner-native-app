import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import MainScreen from './src/screens/MainScreen';
import {PaperProvider} from 'react-native-paper';

enableScreens();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <GestureHandlerRootView>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <MainScreen />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
