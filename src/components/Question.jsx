import React from 'react';

function Question({ question, onClick }) {
  return (
    <div className="question">
      <span>{question}</span>
      <button onClick={onClick}>▶️</button>
    </div>
  );
}

export default Question;