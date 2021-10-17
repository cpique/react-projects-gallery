import React, { useState } from 'react';

const Language = ({id, name, tiobe, website, creator, hello_world, description, image, since, removeLanguage}) => {
  
  const [readMore, setReadMore] = useState(false)
  const textIntroLimit = 200
  
  return <article className='single-language'>
    <img src={image} alt={name} />
    <footer>
      <div className='language-info'>
        <h4>{name}</h4>
        <h4 className='language-since'>Since {since}</h4>
      </div>
      <div className='language-info'>
        <p>Designed by <strong>{creator}</strong></p>
      </div>
      <div className='language-info'>
        <a href={website} target="_blank">Website</a>
      </div>
      <div>
        <p>{readMore? description: `${description.substring(0, textIntroLimit)}`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less': 'Read more'}</button>
        </p>
        
      </div>
      <div>
        <p>Example of Hello World</p>
        <pre>
          <span className='language-code-example'>{hello_world}</span>
        </pre>
      </div>
      
      <button className='delete-btn' onClick={() => removeLanguage(id)}>
        not interested
      </button>
    </footer>
  </article>
};

export default Language;
