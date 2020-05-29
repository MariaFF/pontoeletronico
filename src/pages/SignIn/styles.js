import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px 120px;
`;

export const Input = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #F5F5F5;
  border-radius: 10px;
  margin-bottom: 8px;

  border-width: 2px;
  border-color: #BDBDBD;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #01579B;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;


