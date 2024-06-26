
// import React, { useState } from 'react';
// import { Link,useNavigate } from 'react-router-dom';
// import './Login.css'

// export default function Login() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
// let navigate=useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3001/api/loginuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       const json = await response.json();
//       console.log(json);

//       if (!json.success) {
//         alert('Invalid credentials. Please try again.');
//       }
//       if(json.success){
//         localStorage.setItem("userEmail",credentials.email);

//         localStorage.setItem("authToken",json.authToken);
//         console.log(localStorage.getItem("authToken"));
//         navigate("/")
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//           <Link to="/createuser" className="m-3 btn btn-success">
//             I'm a new User
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert('Invalid credentials. Please try again.');
      }
      if (json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input type="email" name="email" value={credentials.email} onChange={onChange} required />
          <span></span>
          <label>Email address</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" value={credentials.password} onChange={onChange} required />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          <span>Not a member?</span>
          <Link to="/createuser">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

