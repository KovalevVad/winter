
fetch('https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
    }
    return response.json();
  })

  .then(jsonData => {
    const regions = jsonData.reduce((acc, item) => {
      acc.push(item.region);
      return acc;
    }, [])
    const listRegions = [...new Set(regions)]
    return JsonRegion(listRegions)
  })

export default function JsonRegion(listRegions) {
  const listItems = Object.values(listRegions).map(region => <option>{region}</option>);
  return <select>{listItems}</select>;
}

// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];

// export default function List() {
//   const listItems = people.map(person =>
//     <li>{person}</li>
//   );
//   console.log(listItems)
//   return <ul>{listItems}</ul>;
// }

