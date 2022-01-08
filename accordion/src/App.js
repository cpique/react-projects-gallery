import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>50 World Cup Football Soccer Questions Quiz Stats</h3>
        <section className='info'>
          {questions.map((question) => <SingleQuestion key={question.id} {...question}/> )}
        </section>
      </div>
    </main>
  );
}

export default App;
