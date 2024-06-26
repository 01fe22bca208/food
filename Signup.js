// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// export default function Signup() {

//     const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         const response=await fetch("http://localhost:3000/api/createuser",{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'

//             },
//         body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
//         });
//         const json=await response.json()
//         console.log(json);

//         if(!json.success){
//             alert("Enter Valid Credentials");
//         }


//     }
//     const onChange=(event)=>{
//         setcredentials({...credentials,[event.target.name]:event.target.value})

//     }


//   return (
//     <> 
//     <div className='container'> 
           
//         <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control  "name='name' value={credentials.name} onChange={onChange}/>
   
//   </div>

//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1"onChange={onChange} aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword"  name='password' value={credentials.password} onChange={onChange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
//     <input type="text" className="form-control" id="exampleInputPassword1"  name='geolocation' value={credentials.geolocation}onChange={onChange}/>
//   </div>
  
//   <button type="submit" className="btn btn-success">Submit</button>
//   <Link to="/login"className='m-3 btn btn-danger'>Already a user</Link>
// </form>
// </div> 
//     </>
//   )
// }

// Signup.js
// import React, { useState } from 'react';
// import { Link,useNavigate } from 'react-router-dom';



// export default function Signup() {
//   let navigate=useNavigate()

//   const [credentials, setCredentials] = useState({ name: '', email: '', password: '', location: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3001/api/createuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       const json = await response.json();
//       console.log(json);

//       if (!json.success) {
//         alert('Enter Valid Credentials');
//       }
//       if(json.success){
//         localStorage.setItem("authToken",json.authToken);
//         console.log(localStorage.getItem("authToken"));
//         navigate("/")
//       }
      
//     } catch (error) {
//       console.error('Error during signup:', error);
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
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
//           </div>

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

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Address
//             </label>
//             <input type="text" className="form-control" name="location" value={credentials.location} onChange={onChange} />
//           </div>

//           <button type="submit" className="btn btn-success">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a user
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import custom CSS file for Signup component styling

export default function Signup() {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', location: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert('Enter Valid Credentials');
      }
      if (json.success) {
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/")
      }

    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control small-transparent" name="name" value={credentials.name} onChange={onChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control small-transparent" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />

          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control small-transparent" name="password" value={credentials.password} onChange={onChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input type="text" className="form-control small-transparent" name="location" value={credentials.location} onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}





  