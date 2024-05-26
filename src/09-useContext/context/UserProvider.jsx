import { useState } from "react"
import { UserContext } from "./useContext"

// const user = {
    // id: 123,
    // name: 'Marks Martinez',
    // email: 'marks@gmail.com'

// }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{hola: 'Mundo', user: user}}>
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  )
}
