import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/images/logo.png';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const LogoImage = styled.img`
  width: 50px;  // Ajuste o tamanho conforme necessário
  height: auto;
  margin-right: 10px;
`;

const LogoText = styled.h1`
  font-size: 24px;  // Ajuste o tamanho conforme necessário
  color: white;  // Ajuste a cor conforme necessário
  margin: 0;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logoImage} alt="ZapRecall" />
      <LogoText>Zap Recall</LogoText>
    </LogoContainer>
  );
}

export default Logo;