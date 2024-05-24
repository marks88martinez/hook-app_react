import { useEffect } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
//     const [formState, setFormState] = useState({
//         username: '',
//         email: '',
//         password:''
//     })
    
// const {username, email, password} = formState;

// const onInputChange = ({target}) => {
//    const { name, value } =  target;
//    setFormState({
//     ...formState,
//     [ name ]: value
//    })
// }

const {formState, onInputChange, onResetForm, username, email, password} = useForm ({
        username: '',
        email: '',
        password:''
})

// const { username, email, password} = formState;


useEffect(()=>{
    // console.log('useEffect');
},[]);
useEffect(()=>{
    // console.log('useEffect cambio');
},[formState]);
useEffect(()=>{
    // console.log('email cambio');
},[email]);




function handleSubmit(evt){
  
    evt.preventDefault();
}


  return (
  <>
    <h1>Formulario con custom Hook </h1>
    <hr />

    <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
    />
    <input 
        type="email"
        className="form-control mt-2"
        placeholder="marks88martinez@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange} // Add onChange handler here
    />
    <input 
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange} // Add onChange handler here

    />
    
      <button onClick={onResetForm} className="btn btn-primary mt-2"> Reset </button>

      <hr />
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>

  </>
  )
}
