import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
          const {id, name, age, birthDate, image} = person;
          return <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h4>{getAge(birthDate)} years</h4>
              <h4>Birth date: {birthDate.toLocaleDateString()}</h4>
            </div>
          </article> 
      })}
    </>
  );
};

function getAge(birthDate) {
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

export default List;
