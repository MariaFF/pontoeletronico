import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api'


import { Container, Input, Icon, TextInput, Button, ButtonText } from './styles';

const SignIn = () => {
  const navigation = useNavigation();
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = useCallback(async (email, password) => {
    try {
      console.log('login', email, password);

      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = await response.data;
      // await AsyncStorage.setItem('@PontoEletronico', JSON.stringify(user));
      await AsyncStorage.multiSet([
        ['@PontoEletronico:token', token],
        ['@PontoEletronico:user', JSON.stringify(user)],
      ])
      console.log('DATA', user);
      navigation.navigate('Home');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(error.message);
      }
    }

  }, []);

  return (
    <Container>
      <Input>
        <Icon name="mail" size={20} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#666360"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </Input>

      <Input>
        <Icon name="lock" size={20} />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#666360"
          secureTextEntry
          returnKeyType="send"
          value={password}
          onChangeText={password => setPassword(password)}
          onSubmitEditing={() => handleSignIn(email, password)}
        />
      </Input>

      <Button onPress={() => handleSignIn(email, password)}>
        <ButtonText>Entrar</ButtonText>
      </Button>


    </Container>
  );
}

export default SignIn;
