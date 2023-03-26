import React, { useState } from 'react'
import './login.css' // css file import

// main functional component 
// props passing as a parameter  
const UserForm = () => {
  // useState hook to store input fields data as object in current state 
  const[loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
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

          <button onClick={handleSubmit}>Log In</button>
          <button onClick={handleClear}>Clear</button>
        </form>
      </div>
    </div>
  )
}

export default UserForm
