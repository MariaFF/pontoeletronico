import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn';


const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return(
    <AuthStack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F5F5F5' }
    }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
