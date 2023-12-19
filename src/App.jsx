import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWorld}`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Se utiliza fetch por si no te permiten utilizar una dependencia
  // que te ayude con el fetching de datos (axios)
  // 1-Sin usar async
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
          .then(res => res.json())
          .then(data => {
            const { _id } = data
            setImageUrl(`https://cataas.com/cat/${_id}/says/${threeFirstWords}?fontSize=50&fontColor=white`)
          })

        /*
        Codigo visto pero actualmente no funciona porque el response
        no larga una url
        fetch(`https://cataas.com/cat/says/${threeWords}?fontSize=50&fontColor=red&json=true`)
          .then(res => res.json())
          .then(response => {
            console.log(response)
            // const { url } = response
            // setImageUrl(`https://cataas.com${url}`)
          })
        */
      })
  }, [])
  // 2-Con async
  // useEffect(() => {
  //   async function getRandomFact () {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const data = await res.json()
  //     setFact(data.fact)
  //   }
  //   getRandomFact()
  // }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>} {/* Renderizado condicional */}
      {imageUrl && <img src={imageUrl} alt={`Image extrated first three words for ${fact}`} />}
    </main>
  )
}
