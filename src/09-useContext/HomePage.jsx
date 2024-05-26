
import { useContext } from "react"
import { UserContext } from "./context/useContext"



export const HomePage = () => {
 const { user } = useContext(UserContext)
  return (
    <>
        <h1>HomePage {user?.name}</h1>
        <pre>
          {
            JSON.stringify(user, null, 3)
          }
        </pre>
    </>
  )
}
