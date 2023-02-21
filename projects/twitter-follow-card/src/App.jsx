import './App.css'

const users = [
  {
    userName: 'juanjosevega99',
    name: 'Juan Jose Vega',
    isFollowing: true
  },
  {
    userName: 'paulaceronj',
    name: 'Paula Ceron.',
    isFollowing: false
  }
]

function App () {
  return (
    <section className='App'>
      {users.map(({ userName, name }) => (
        <h1 key={userName}>{name}</h1>
      ))}
    </section>
  )
}

export default App
