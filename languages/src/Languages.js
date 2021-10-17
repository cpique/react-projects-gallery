import React from 'react';
import Language from './Language';

const Languages = ({languages, removeLanguage}) => {
  return (<section>
    <div className='title'>
      <h2>Languages</h2>
      <div className='underline'></div>
    </div>
    <div>
      {languages.map((language) => {
        return <Language key={language.id} {...language} removeLanguage={removeLanguage}></Language>
      })}
    </div>
  </section>)
};

export default Languages;
