import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import '../login.css' // css file import

// main functional component 
// props passing as a parameter  
const UserForm = ({addLoginInfo, clearLoginInfo}) => {
  const navigate = useNavigate();
  // useState hook to store input fields data as object in current state 
  const[loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // function to handle change in form's input field 
  const handleChange = (event)=> {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value})
  }

  // function to handle events after clicking submit function 
  const handleSubmit = (event) =>{
    // passing current useState's data as an argument to addLoginInfo function 
    addLoginInfo(loginInfo);
    navigate("/LoginInfo");
  }

  // function to clear useState data stored as an array 
  const handleClear = (event) => {
    event.preventDefault();
    clearLoginInfo(loginInfo);
    setLoginInfo({email: "", password: ""});
  }

  return (
    <>
      <div class="form-container">
        <h1>Login</h1>
        {/* react controlling form  */}
        <form>
          <label>Enter Email</label><br />
          <input 
            type="email" 
            name="email"
            placeholder='email'
            value={loginInfo.email}
            onChange={handleChange}
          />
          <br /><br />
          
          <label>Enter Password</label><br />
          <input 
            type="password" 
            name="password"
            placeholder='password'
            value={loginInfo.password}
            onChange={handleChange}
          />
          <br /><br />

          <button onClick={handleSubmit}>Login</button>
          <button onClick={handleClear}>Clear</button>
        </form>
      </div>
    </>
  )
}

export default UserForm
