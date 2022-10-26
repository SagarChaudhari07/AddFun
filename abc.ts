interface Person {
    first: string;
    last: string;
  }
  
  let bert = { first: 'Bert', last: 'Macklin' };
  let person = bert as Person;
  console.log(person.first, person.last);