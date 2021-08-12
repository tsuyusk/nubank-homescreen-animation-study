import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Top>
        <S.Logo
          source={{ uri: 'https://gtswiki.gt-beginners.net/decal/png/88/14/19/8439839238096191488_1.png' }}
          resizeMode="cover"
        />
        <S.Title>Tsuy</S.Title>
      </S.Top>

      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </S.Container>
  );
}

export default Header;
