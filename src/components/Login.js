import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: ""})
    let navigate = useNavigate()
    const handlesubmit = async (e) => {
        e.preventDefault();
       
            // Api Call
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    
                },
                body: JSON.stringify({email: credentials.email, password: credentials.password})
            });
            const json = await response.json()
            console.log(json)
            setCredentials(json)
            if (json.success){
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken); 
                navigate("/notes");
    
            }
            else{
                alert("Invalid credentials");
            }
    }
  
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container col-md-5 ' style={{ marginTop: "150px",marginBottom: "150px" }} >
            <form onSubmit={handlesubmit}>
                <h1 className='text-center my-5'>Please Login</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' value={credentials.email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={onChange} className="form-control" id="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}


export default Login
