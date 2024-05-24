import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

   const [counter, setCounter] = useState(10)

   const incrementFather = useCallback(
     (val) => {
        setCounter(( value ) => value + val)
     },
     [],
   )
//    useEffect(() => {
//     incrementFather();
//    }, [incrementFather])
   
   


  return (
    <>
        <div>useCallbackHook:  {counter}</div>
        <hr />
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}

