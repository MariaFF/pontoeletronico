
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #F5F5F5;
  align-items: center;
  padding: 10px;
`;

export const Coordenadas = styled.Text`
  color: #f4ede8;
  font-size: 16px;
`;

/* //Avatar, Button, ButtonText, Intervalo, List, ListItem */
export const Avatar =  styled.View`
  background-color: #fff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const AvatarText = styled.Text`
  color: #ff9000;
  font-size: 28px;
  font-family: 'RobotoSlab-Regular';
`;

export const Intervalo = styled.View``;

export const IntervaloText = styled.Text``

export const List = styled.View`
  background-color: #f40007;
  flex: 1;
`

export const ListItem = styled.View`
  background-color: #fff;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #01579B;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
