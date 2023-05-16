
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import '../Register.css'
// import { useDispatch } from "react-redux/es/hooks/useDispatch";
// import LoginAction from "../Redux/Actions";
// const Login = () => {
//   const [userData, setUserData] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//   const navigate = useNavigate('');
//   const dispatch = useDispatch()
//   useEffect(() =>{
//     async function fetchUser() {
//       try{
//         const data = await axios.get('http://localhost:5000/Users')
//         setUserData(data.data)
//       }
//       catch (err){
//         console.log(err);
//       }
//     }
//     fetchUser()

//   }, [])

//   const ProceedLogin = (e) => {
//     e.preventDefault();

    
    

//     if (validate()) {
//         ///implentation
//         // console.log('proceed');
//         // fetch('http://localhost:5000/Users/' + email).then((res) => {
//         //     return res.json();
//         // }).then((resp) => {
//         //     //console.log(resp)
//         //     if (Object.keys(resp).length === 0) {
//         //         toast.error('Please Enter valid Email');
//         //     } else {
//         //         if (resp.pass === pass) {

//         //             toast.success('Success');
//         //             navigate('/')
//         //         }else{
//         //             toast.error('Please Enter valid Data ');
//         //         }
//         //     }
//         // }).catch((err) => {
//         //     toast.error('Login Failed due to :' + err.message);
//         // });
//       if (userData.find(f => f.email === email) && userData.find(f => f.pass === pass)) {
//         const userID = userData.find(f => f.email === email)
//         localStorage.setItem('userID', userID.id)
//         dispatch(LoginAction)
//         navigate('/')
//       }
      

//     }
// }
// const validate = () => {
//   let result = true;
//   if (email === '' || email === null) {
//       result = false;
//       toast.warning('Please Enter Username');
//   }
//   if (pass === '' || pass === null) {
//       result = false;
//       toast.warning('Please Enter Password');
//   }
//   return result;
// }
//   return (
//     <section className="Register">
//     <div className="Register-form-container">
//       <form onSubmit={ProceedLogin}>
//         <h3>Login</h3>
//         <input type="email" className="box" placeholder="youremail@gmail.com" value={email} name="Email" onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" className="box" placeholder="********" value={pass} name="Pass" onChange={(e) => setPass(e.target.value)} required />
//         <button type="submit" className="btn" >login now</button>
//         <input type="checkbox" id="remember" />
//         <label for="remember">remember me</label>
//         <p>You have Already an account? <Link to='/Register'>Register</Link></p>
//       </form>
//     </div>

//   </section>
//   )
// }

// export default Login;




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import LoginAction  from "../Redux/Actions";
import Header from "./Header";

const Login = () => {
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get("http://localhost:5000/Users");
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
  
    if (validate()) {
      if (userData.find((f) => f.email === email && f.pass === pass)) {
        const userID = userData.find((f) => f.email === email);
        localStorage.setItem("userID", userID.id);
        localStorage.setItem('state', true);
        dispatch(LoginAction);
        navigate("/");
      } else {
        toast.error("Please Enter valid Data ");
      }
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (pass === "" || pass === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    if (!result) {
      return false;
    }
    return true;
  };;

  return (
    <>
    <Header/>
    <section className="Register">
    <div className="Register-form-container">
       <form onSubmit={ProceedLogin}>
         <h3>Login</h3>
         <input type="email" className="box" placeholder="youremail@gmail.com" value={email} name="Email" onChange={(e) => setEmail(e.target.value)} required />
         <input type="password" className="box" placeholder="********" value={pass} name="Pass" onChange={(e) => setPass(e.target.value)} required /><br/>
         <button type="submit" className="btn" >login now</button><br/>
         <p>You Don't have any account? <Link to='/Register'>Create New Account</Link></p>
       </form>
     </div>
    </section>
    </>
  );
};

export default Login;