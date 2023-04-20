import React, { useState } from 'react';
import data from './data';

const List = ({}) => {
  const [people, setPeople] = useState(data);
  
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button onClick={() => removeItem(id)}>clear</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
