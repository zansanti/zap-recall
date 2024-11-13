import React, { useState } from 'react';
import styled from 'styled-components';
import setaVirar from '../assets/images/seta_virar.png';

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const QuestionItem = styled.div`
  background-color: ${(props) => props.color || '#f9f9f9'};
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-decoration: ${(props) => (props.strike ? 'line-through' : 'none')};
`;

const QuestionContent = styled.div`
  background-color: #ffffe0;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
  width: 300px;
  text-align: center;
`;

const AnswerContent = styled.div`
  background-color: #e0ffe0;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
  width: 300px;
  text-align: center;
`;

const OptionButton = styled.button`
  margin: 5px;
  padding: 5px;
  background-color: ${(props) => props.color || '#fff'};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

function QuestionList() {
  const cards = [
    { id: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { id: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { id: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { id: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { id: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { id: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { id: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];
  
  const [activeCard, setActiveCard] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [results, setResults] = useState({});

  const handleQuestionClick = (id) => {
    if (!results[id]) { // Verificar se a pergunta não foi respondida
      if (activeCard === id) {
        setShowAnswer(!showAnswer);
      } else {
        setActiveCard(id);
        setShowAnswer(false);
      }
    }
  };

  const handleOptionClick = (id, option) => {
    if (!results[id]) {
      setCompleted(completed + 1);
    }
    setResults({...results, [id]: option});
    setActiveCard(null);
    setShowAnswer(false);
  };

  const getColor = (option) => {
    switch(option) {
      case 'zap': return '#aaffaa';
      case 'quase': return '#ffcc00';
      case 'erro': return '#ffaaaa';
      default: return '#f9f9f9';
    }
  };

  return (
    <QuestionListContainer>
      {cards.map((card, index) => (
        activeCard === card.id ? (
          showAnswer ? (
            <AnswerContent key={card.id}>
              {card.answer} <br />
              <OptionButton color="#aaffaa" onClick={() => handleOptionClick(card.id, 'zap')}>Zap</OptionButton>
              <OptionButton color="#ffcc00" onClick={() => handleOptionClick(card.id, 'quase')}>Quase</OptionButton>
              <OptionButton color="#ffaaaa" onClick={() => handleOptionClick(card.id, 'erro')}>Erro</OptionButton>
            </AnswerContent>
          ) : (
            <QuestionContent key={card.id}>
              {card.question} <br />
              <img src={setaVirar} alt="Virar" onClick={() => setShowAnswer(true)} style={{cursor: 'pointer'}} />
            </QuestionContent>
          )
        ) : (
          <QuestionItem 
            key={card.id} 
            onClick={() => handleQuestionClick(card.id)} 
            color={getColor(results[card.id])}
            strike={!!results[card.id]}
          >
            <span>{`Pergunta ${index + 1}`}</span>
            <button>▶️</button>
          </QuestionItem>
        )
      ))}
      <p>{`${completed}/${cards.length} CONCLUÍDOS`}</p>
    </QuestionListContainer>
  );
}

export default QuestionList;