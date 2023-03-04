import './App.css'
import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fact'
import { useCatImage } from '../hooks/useCatImage'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    // getRandomFact().then(newFact => setFact(newFact))
    getRandomFact().then(setFact)
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App of cats</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='' />}
    </main>
  )
}
