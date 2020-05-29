import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home';
import Workday from './pages/Workday'

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F5F5F5' }
    }}>
      <AppStack.Screen name={"SignIn"} component={SignIn} />
      <AppStack.Screen name={"Home"} component={Home} />
      <AppStack.Screen name={"Workday"} component={Workday} />
    </AppStack.Navigator>
  );
}

export default Routes;
