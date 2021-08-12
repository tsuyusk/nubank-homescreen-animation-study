import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import * as S from './styles';

interface MenuProps {
  translateY: Animated.Value;
}

const Menu: React.FC<MenuProps> = ({ translateY }) => {

  return (
    <S.Container
      style={{
        opacity:
          translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
          }),
      }}
    >
      <S.Code>
        <QRCode
          value="https://discord.com"
          size={80}
          backgroundColor="#fff"
          color="#810bae"
        />
      </S.Code>

      <S.Nav>
        <S.NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <S.NavText>Me ajuda</S.NavText>
        </S.NavItem>

        <S.NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <S.NavText>Perfil</S.NavText>
        </S.NavItem>

        <S.NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <S.NavText>Configurar cartao</S.NavText>
        </S.NavItem>

        <S.NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <S.NavText>Configuracoes do App</S.NavText>
        </S.NavItem>
      </S.Nav>

      <S.SignOutButton onPress={() => { }}>
        <S.SignOutButtonText>Sair do App</S.SignOutButtonText>
      </S.SignOutButton>
    </S.Container>
  );
}

export default Menu;
