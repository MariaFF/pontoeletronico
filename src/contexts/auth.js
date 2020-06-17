import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
// import { useNavigation } from '@react-navigation/native';

const AuthContext = createContext()

export default AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadStorageUser() {
      const [token, user] = await AsyncStorage.multiGet([
        '@PontoEletronico:token',
        '@PontoEletronico:user',
      ])
      // const jsonValue = await AsyncStorage.getItem('@PontoEletronico')
      console.log('é array', user, token);

      if(token[1] && user[1]) {
        // let userParsed = JSON.parse(user[1]);

        // setData({token: token[1], user: userParsed.reduce(function(result, item, index, array) {
        //   return item;
        // }, {}) })
        setData({token: token[1], user: JSON.parse(user[1])})
      }
      console.log('setData', data);

    }
    loadStorageUser();
  // setLoading(false);
  }, []);

  const signIn = async (colaborador_id, email, senha) => {
    console.log('contexto', colaborador_id, email);

    try {

      let response = {};

      // Cadastrar nova senha
      if (colaborador_id) {

        response = await api.post('/resete/senha', {
          colaborador_id,
          senha
        });
      } else {
        console.log('else');
        response = await api.post('/login', {
          email,
          senha,
        });
      }
      console.log('RESPONSE', response.data);

      const { user, token } = response.data;
      setData({ token, user });
      // await AsyncStorage.setItem('@PontoEletronico', JSON.stringify(user));
      await AsyncStorage.multiSet([
        ['@PontoEletronico:token', token],
        ['@PontoEletronico:user', JSON.stringify(user)],
      ])
      console.log('DATA signIn Context', data);
      // navigation.navigate('Home');


    } catch (error) {
      console.log('Erro signIn', error);
    }

  }

  return(
    <AuthContext.Provider value={{ signed: data && !!data.user, data, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Deu errado o context');
  const { signed, data, signIn } = context;
  return { signed, data, signIn };
}
