import 'react-native-gesture-handler'
import React from 'react';
import { View, StatusBar } from 'react-native';
import  { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#F5F5F5"  />
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}

export default App;
