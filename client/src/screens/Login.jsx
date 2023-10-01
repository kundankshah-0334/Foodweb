import React, { useState } from 'react'
import { Link , useNavigate } from "react-router-dom"



function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:8000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await responce.json();
    console.log(json);

    if (!json.success) {
      alert("Try again with valid credentials")
    }
    if (json.success) {
      localStorage.setItem("userEmail" , credentials.email);
      localStorage.setItem("authToken" , json.authToken);
      console.log(localStorage.getItem('authToken'));
      
      navigate("/")
    }


  }
  const onChangeSignUp = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className='mt-5 container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter Email</label>
            <input name='email' value={credentials.email} onChange={onChangeSignUp} type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Enter Password</label>
            <input name='password' value={credentials.password} onChange={onChangeSignUp} type="password" className="form-control" />
          </div>
          <div className='mb-3'>
            <button type="submit" className="btn btn-primary">Login</button>
            <Link className="btn ms-4 btn-danger" to="/signup" type="submit">I'm a new User</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
