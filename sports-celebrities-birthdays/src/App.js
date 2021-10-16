import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  
  const [people, setPeople] = useState(data);
  const filteredPeopleByCurrentMonth = people.filter(x => x.birthDate.getMonth() == (new Date()).getMonth())
  const filteredPeopleByNextMonth = people.filter(x => x.birthDate.getMonth() == getNextMonth())
  const filteredPeopleByLastMonth = people.filter(x => x.birthDate.getMonth() == getPreviousMonth())

  return (
  <main>

    <section className="container">
      <h3>{filteredPeopleByLastMonth.length} birthdays last month</h3>
      <List people={filteredPeopleByLastMonth}></List>

      <button onClick={() => setPeople(people.filter(p => !filteredPeopleByLastMonth.includes(p)))}>clear all</button>
    </section>

    <section className="container">
      <h3>{filteredPeopleByCurrentMonth.length} birthdays this month</h3>
      <List people={filteredPeopleByCurrentMonth}></List>

      <button onClick={() => setPeople(people.filter(p => !filteredPeopleByCurrentMonth.includes(p)))}>clear all</button>
    </section>

    <section className="container">
      <h3>{filteredPeopleByNextMonth.length} birthdays next month</h3>
      <List people={filteredPeopleByNextMonth}></List>

      <button onClick={() => setPeople(people.filter(p => !filteredPeopleByNextMonth.includes(p)))}>clear all</button>
    </section>

  </main>
  );
}

// Takes care of December and change of year
function getNextMonth() {
  var now = new Date();
  if (now.getMonth() == 11)
      return new Date(now.getFullYear() + 1, 0, 1).getMonth();
  else 
      return new Date(now.getFullYear(), now.getMonth() + 1, 1).getMonth();
}

// Takes care of January and change of year
function getPreviousMonth() {
  var now = new Date();
  if (now.getMonth() == 0)
      return new Date(now.getFullYear() - 1, 0, 1).getMonth();
  else 
      return new Date(now.getFullYear(), now.getMonth() - 1, 1).getMonth();
}

export default App;
