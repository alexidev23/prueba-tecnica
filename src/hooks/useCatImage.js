import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar laimagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return // esto es por si no carga ningun fact
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { _id } = data
        setImageUrl(`${CAT_PREFIX_IMAGE_URL}cat/${_id}/says/${threeFirstWords}?fontSize=50&fontColor=white`)
      })
  }, [fact])

  return { imageUrl }
}
