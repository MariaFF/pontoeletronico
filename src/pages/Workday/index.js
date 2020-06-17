import React, { useEffect } from 'react';
import { Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import api from '../../services/api'

import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

const Workday = () => {
  const navigation = useNavigation();

  const onSuccess = async e => {
    let teste = await e;

    try {
      // const response = await api.post('/users', {
      //   name: "Maria",
      //   email: "123testinho@teste.com.br",
      //   password: "1234"
      // });
      navigation.goBack();
      console.log('abencoa senhor', teste);

    } catch (error) {
      console.log('não salvou', error);

    }


    // console.warn('SEI LA ', teste);

  }

  return (
    <Container>
      <Text>
        Teste
      </Text>

      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        checkAndroid6Permissions={true}
      />
    </Container>
  );
}

export default Workday;
