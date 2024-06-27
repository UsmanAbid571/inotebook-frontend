import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"", email: "", password: ""})
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
        // Api Call
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({name: credentials.name ,email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json)
        setCredentials(json)
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/login");

        }
        else{
            alert("Invalid credentials");
        }
    }
  
    const onChange = (e) => {
       setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name' value={credentials.name} required onChange={onChange} className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' value={credentials.email} required onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" value={credentials.password} required onChange={onChange} className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" >Signup</button>
            </form>
        </div>
    )
}

export default Signup
