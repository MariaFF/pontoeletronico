import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Dashboard from '../pages/Dashboard'

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
    initialRouteName="Dashboard"
      drawerStyle={{
        backgroundColor: '#fff',
        width: 240
      }}
    >
      <Drawer.Screen  name={"Dashboard"} component={Dashboard} />
    </Drawer.Navigator>
  );
}

export default Home;
