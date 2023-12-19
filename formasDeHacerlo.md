  // Se utiliza fetch por si no te permiten utilizar una dependencia
  // que te ayude con el fetching de datos (axios)
  // 1-Sin usar async
  // 2-Con async
  // useEffect(() => {
  //   async function getRandomFact () {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const data = await res.json()
  //     setFact(data.fact)
  //   }
  //   getRandomFact()
  // }, [])
  // este efecto se utiliza para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
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