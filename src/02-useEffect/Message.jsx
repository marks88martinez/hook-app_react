import { useEffect, useState } from "react"

// forma de manejar Eventos
export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {
        const onMouseMove = ({ x, y})=>{
            // const coords = { x, y };
            setCoords({y, x})
            // console.log(coords);
        }
        window.addEventListener('mousemove', onMouseMove);
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])

    
  return (
    <>
        <h3>Usuario ya existe</h3>
        {
            JSON.stringify( coords )
        }
    </>
  )
}
