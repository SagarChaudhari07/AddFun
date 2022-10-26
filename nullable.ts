function buildName(first: string, last: string, middle?: string) {
    if (middle) {
      return `${first} ${middle} ${last}`;
    } else {
      return `${first} ${last}`;
    }
  }
  
  console.log(buildName('Craig', 'McKeachie'));
  console.log(buildName('Craig', 'McKeachie', 'D.'));