import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import QuestionList from './components/QuestionList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FB6b6b;
  max-width: 480px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Logo />
      <QuestionList />
    </AppContainer>
  );
}

export default App;