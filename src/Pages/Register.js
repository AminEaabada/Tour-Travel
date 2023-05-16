import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import '../Register.css'
import Header from "./Header";
const Register = (props) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = { username, name, pass, email }
    axios.post('http://localhost:5000/Users', regObj, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {

        toast.success('Registration Was Successful!');
        navigate('/');
      })
      .catch((error) => {
        toast.error('Registration Failed: ' + error.message);
      });
  }




  return (
    <>
      <Header />
      <section className="Register">
        <div className="Register-form-container">
          <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <input type="text" className="box" placeholder="User Name" value={username} name="username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="text" className="box" placeholder="enter your Name" value={name} name="name" onChange={(e) => setName(e.target.value)} required />
            <input type="email" className="box" placeholder="youremail@gmail.com" value={email} name="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="box" placeholder="********" value={pass} name="Pass" onChange={(e) => setPass(e.target.value)} required /><br />
            <button type="submit" className="btn" >login now</button><br />
            <p>You have Already an account? <Link to='/Login'>Login</Link></p>
          </form>
        </div>

      </section>
    </>
  )
}

export default Register
