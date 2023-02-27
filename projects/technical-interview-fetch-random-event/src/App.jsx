import './App.css'
import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsWord}?size=50`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })

    const threeFirstWords = fact.split(' ', 3)
    console.log('🚀 ~ file: App.jsx:16 ~ useEffect ~ threeFirstWords:', threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [])

  return (
    <main>
      <h1>App of cats</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='' />}
    </main>
  )
}
