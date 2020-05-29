import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Avatar, AvatarText, Button, ButtonText, Intervalo, List, ListItem } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

const Dashboard = ({ navigation }) => {
  const [location, setLocation] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const arr = [
    1, 2
    // {id: 1, tipo: 'entrada', date: '15:40', obs: 'teste'},
    // {id: 2, tipo: 'saida', date: '16:40', obs: 'teste'}
  ]

  // useEffect(() => {
  //   async function loadStorageData(): Promise<void> {
  //     const [token, user] = await AsyncStorage.multiGet([
  //       '@GoBarber:token',
  //       '@GoBarber:user',
  //     ]);

  //     if (token[1] && user[1]) {
  //       setData({ token: token[1], user: JSON.parse(user[1]) });
  //     }

  //     setLoading(false);
  //   }
  //   loadStorageData();
  // }, []);

  useEffect(() => {
    async function loadStorageUser() {
      const [token, user] = await AsyncStorage.multiGet([
        '@PontoEletronico:token',
        '@PontoEletronico:user',
      ])
      // const jsonValue = await AsyncStorage.getItem('@PontoEletronico')
      console.log('USER', user);

      if(token[1] && user[1]) {
        setData({token: token[1], user: JSON.parse(user[1]) })

      }
    }
    console.log(' DATA USER', data);
    loadStorageUser();
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log('POSITION', coords);
        setLocation(coords);
      },
      (error) => {
        // See error code charts below.
        console.log('ERROR', error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  setLoading(false);
  }, []);
  return (
    <>
    <LinearGradient
      start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 2.0}}
      locations={[0.1, 0.2,0.5]}
      colors={['#0288D1', '#0277BD', '#01579B']}
      style={{ width: '100%', height: 180, alignItems: "center", paddingTop: 10 }}>
        <Icon onPress={navigation.toggleDrawer}
         name="menu" size={28} color="#fff" style={{ alignSelf: 'flex-start', marginLeft: 10, marginTop: 10, position: 'absolute' }} />

      <Avatar>
        <AvatarText>MF</AvatarText>
      </Avatar>
      <Text style={{ color: 'white', fontSize: 18 }}>Boa Tarde</Text>
      <Text style={{ color: 'white', fontSize: 20 }}>{`Boa tarde ${data.user ? data.user.name : 'Colaborador'}`}</Text>
    </LinearGradient>



    <Container>

        <FlatList
        style={{  width: '100%', marginTop: 10 }}
          data={arr}
          renderItem={({ item }) => (
            <ListItem key={item}>
              <Icon name="arrow-up-right" size={20} color="#f40007"/>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text>1ª Saida (fui ao medico)</Text>
                <Text>15:40</Text>
              </View>
              <Icon name="more-vertical" size={20} />
            </ListItem>
          )}
        />


    </Container>
    <Button onPress={() => navigation.navigate('Workday')}>
      <ButtonText>Registrar</ButtonText>
    </Button>
  </>
  );
}

export default Dashboard;
