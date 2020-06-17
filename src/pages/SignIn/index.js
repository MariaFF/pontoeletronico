import React, { useContext, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {  useAuthContext } from '../../contexts/auth';
import api from '../../services/api';


import { Container, Label, Input, Icon, TextInput, Button, ButtonText, NewPassInfo } from './styles';

const SignIn = () => {
  const navigation = useNavigation();
  const { signIn } = useAuthContext();

  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [isFirstTime, setFirtsTime] = useState(false);
  const [showInputPass, setShowInputPass] = useState(false);
  const [colaborador_id, setColaboradorId] = useState(null);


  async function handleNext(email){
    try {
      const response = await api.post('/login', {
        email,
      });
      console.log('next');

      setShowInputPass(true);
      if (response.data.colaborador_id) {
        setColaboradorId(response.data.colaborador_id);
        return;
      }

    } catch (error) {
      console.log('Erro', error);
    }
  }

  function handleauthenticated() {
    signIn(colaborador_id, email, senha);
    navigation.navigate('Home');
  }

  function renderInputPass() {
    return (
      <>
        <Label>Informe sua senha: </Label>
        <Input>
          <Icon name="lock" size={20} />
          <TextInput
            placeholder={isFirstTime ? 'Nova Senha' : 'Senha'}
            placeholderTextColor="#666360"
            secureTextEntry
            returnKeyType="send"
            value={senha}
            onChangeText={senha => setPassword(senha)}
            onSubmitEditing={() => handleauthenticated()}
          />
        </Input>
      </>
    )
  }

  function renderContent() {
    if (showInputPass) {
      return (
        <>
          {colaborador_id && (<NewPassInfo>Cadastre uma nova senha</NewPassInfo>)}
          {renderInputPass()}

          <Button onPress={() => handleauthenticated()}>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </>
      );
    }
    return (
      <>
        <Label>Informe seu email: </Label>
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
        <Button onPress={() => handleNext(email)}>
          <ButtonText>Próximo</ButtonText>
        </Button>
      </>
    )
  }

  return (
    <Container>
      {renderContent()}
    </Container>
  );
}

export default SignIn;
