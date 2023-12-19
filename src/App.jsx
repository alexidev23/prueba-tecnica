import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Click me</button>
      {fact && <p>{fact}</p>} {/* Renderizado condicional */}
      {imageUrl && <img src={imageUrl} alt={`Image extrated first three words for ${fact}`} />}
    </main>
  )
}
