import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardUser from './components/CardUser'

function App() {
  
  const [users, setUsers] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  },[])

  console.log(users)

  return (
    <div className="App">
      <h1 className='principal-title'>Applicación de usuarios</h1>
      <div className='user-container'>
        {
          users?.map(user => (
            <CardUser 
              key={user.id}
              user={user}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
