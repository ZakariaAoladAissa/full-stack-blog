import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Login (){
    const [inputs,setInputs]=useState({
        username:"",
        email:"",
    })
    const [err,setError]=useState(null)

    const navigate =useNavigate()

    const {login} =useContext(AuthContext)
    console.log(login)

    const handleChange=e=>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit=async e=>{
        e.preventDefault()
        try{
            await login(inputs)
            navigate("/")
        }catch(err){
          setError(err.response.data)
          console.log(err)
        }
    }
    return(
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
                <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>
                    No account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}