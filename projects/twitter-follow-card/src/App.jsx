import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

const users = [
  {
    userName: 'juanjosevega99',
    name: 'Juan Jose Vega',
    isFollowing: true
  },
  {
    userName: 'PaulaCeronJ',
    name: 'Paula Ceron',
    isFollowing: false
  }
]

function App () {
  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>{name}</TwitterFollowCard>
      ))}
    </section>
  )
}

export default App
