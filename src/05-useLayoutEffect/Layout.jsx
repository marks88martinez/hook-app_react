import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage"
import { PokemonCard } from "../03-examples/PokemonCard"
import { useLayoutEffect, useRef, useState } from "react"




export const Layout = () => {
    const pRef = useRef();
    const [boxSize, setBoxSize]= useState({
        width: 0, height: 0
    })
    useLayoutEffect(()=>{
        console.log(pRef.current.getBoundingClientRect());
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height})
    },[]);
  
  const {counter, decrement, increment} = useCounter(1)

  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
        <h1>Informacion de Pokemon</h1>
        <br />
        { 
        isLoading 
          ? <LoadingMessage/>
          : (
            <PokemonCard 
            id= { counter} 
            name={ data.name } 
            sprites = {[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ]}
            />
          )
        }
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

        {/* // la ? significa que si existe  que muestre // */}
        <h2 ref={pRef}>{data?.name}</h2>

        <code>
            {JSON.stringify(boxSize)}
        </code>

        <button className="btn btn-primary mt-2" onClick={() => counter > 1 ?  decrement() :  null}>
          Anterior
        </button>
        <button className="btn btn-primary mt-2"onClick={() => increment()}>
          Siguiente
        </button>
    </>
  )
}
