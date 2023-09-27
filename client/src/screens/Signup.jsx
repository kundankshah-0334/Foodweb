import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Signup() {
    const [credentials , setCredentials] = useState({
        name:"",
        email:"",
        geolocation:"",
        password:"",
    });
 
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const responce = await fetch("http://localhost:8000/api/createuser" ,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({name: credentials.name , email : credentials.email , geolocation: credentials.geolocation, password: credentials.password} ),
        });
        const json = await responce.json();
        console.log(json);

        if(!json.success){
            alert("Enter Valid Credentials")
        }

      }
      const onChangeSignUp = (event) =>{
        setCredentials({...credentials , [event.target.name] : event.target.value})
    }
  return (
   <>
   <div className='mt-5 container'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Enter Name</label>
    <input name='name' value={credentials.name} onChange={onChangeSignUp} type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Enter Email</label>
    <input name='email' value={credentials.email} onChange={onChangeSignUp} type="email" className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="location" className="form-label">Enter Address</label>
    <input name='geolocation' value={credentials.geolocation} onChange={onChangeSignUp} type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Enter Password</label>
    <input name='password' value={credentials.password} onChange={onChangeSignUp} type="password" className="form-control"  />
  </div>
  <div className='mb-3'>
    <button type="submit" className="btn btn-primary">Submit</button>
    <Link className="btn ms-4 btn-danger" to="/login" type="submit">Already a User</Link>
  </div>
</form>
</div>
   </>
  )
}

export default Signup
