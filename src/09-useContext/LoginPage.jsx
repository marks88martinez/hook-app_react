import React, { useContext } from 'react'
import { UserContext } from './context/useContext';

export const LoginPage = () => {
const {user, setUser} = useContext(UserContext);


  return (
    <>
        <h1>LoginPage</h1>
        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>
        <button className='btn btn-primary' onClick={() => setUser({
              id: 123,
              name: 'Marks Martinez',
              email: 'marks@gmail.com'
        })}>
          Set User
        </button>
    </>
  )
}
