import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const sanitizedNumber = (number) => {
    if(number < 0) return people.length - 1
    if(number >= people.length) return 0
    return number
  } 

  const prevPerson = () => setIndex((index) => sanitizedNumber(index - 1))
  const nextPerson = () => setIndex((index) => sanitizedNumber(index + 1))
  const randomPerson =() => setIndex((index) => getRandomInt(1, people.length))


  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Random</button>
    </article>
  )
};

export default Review;