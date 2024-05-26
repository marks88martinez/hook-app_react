import React, { createContext } from 'react'

export const UserContext = createContext();


export const useContext = () => {
  return (
    <div>useContext</div>
  )
}
