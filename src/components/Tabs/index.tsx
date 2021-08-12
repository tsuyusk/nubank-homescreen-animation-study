import React from 'react';
import { Animated } from 'react-native';
import * as S from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

interface TabsProps {
  translateY: Animated.Value;
}

const Tabs: React.FC<TabsProps> = ({ translateY }) => {

  return (
    <S.Container
      style={{
        transform: [
          {
            translateY:
              translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [0, 30],
                extrapolate: 'clamp',
              }),
          }
        ],
        opacity:
          translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [1, 0.3],
            extrapolate: 'clamp',
          })
      }}
    >
      <S.TabsContainer>
        <S.TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <S.TabText>Indicar Amigos</S.TabText>
        </S.TabItem>

        <S.TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <S.TabText>Cobrar</S.TabText>
        </S.TabItem>

        <S.TabItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <S.TabText>Depositar</S.TabText>
        </S.TabItem>

        <S.TabItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <S.TabText>Transferir</S.TabText>
        </S.TabItem>

        <S.TabItem>
          <Icon name="lock" size={24} color="#fff" />
          <S.TabText>Bloquear Cartao</S.TabText>
        </S.TabItem>
      </S.TabsContainer>
    </S.Container>
  );
}

export default Tabs;
