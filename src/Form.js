import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
useNavigate
} from "react-router-dom";


function LogInForm(props) {
    // const navigate = useNavigate();

    const [email, setName] = useState('');
    const [pwd, setPwd] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('Name', email);
    localStorage.setItem('Password', pwd);
    if(localStorage.setItem('Name', email)==email &&  localStorage.setItem('Password', pwd)==pwd){
        // navigate('/App');
    }
  };
  
  
 

  return (
    <>
      <Router>
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <label>Email :</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Password</label>
          <input
            type="pwd"
            className="form-control"
            id="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <input type="submit" />
        </form>
       
      </Router>
    </>
  );
}
export default LogInForm;
