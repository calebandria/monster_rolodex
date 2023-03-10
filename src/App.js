import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        (result) => {
          setMonsters(result)
        }
      )
  })

  return (
    <div className='App'>
      <input className='search-box' placeholder='search monsters' type='search' onChange={(event) => {
          let boxSearch =monsters.filter(monster =>{
          return monster.name[event.target.value.length-1] === event.target.value
        })
        setMonsters(boxSearch)
      }} />
      {monsters.map(monster => {
        return (
          <div key={monster.id}>
            {monster.name}
          </div>
        )
      })}

    </div>
  )
}

export default App;