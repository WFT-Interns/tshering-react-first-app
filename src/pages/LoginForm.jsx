import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TextField, Button, styled } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/BlackTheme';
import '../login.css' // css file import

// main functional component 
// props passing as a parameter  
const UserForm = ({ addLoginInfo, clearLoginInfo }) => {

  const StyledButton = styled(Button)({
    marginRight: 10,
    '&:hover': {
      backgroundColor: "",
      boxShadow: "none"
    }
  })

  const navigate = useNavigate();
  // useState hook to store input fields data as object in current state 
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // function to handle change in form's input field 
  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value })
  }

  // function to handle events after clicking submit function 
  const handleSubmit = (event) => {
    // passing current useState's data as an argument to addLoginInfo function 
    addLoginInfo(loginInfo);
    navigate("/LoginInfo");
  }

  // function to clear useState data stored as an array 
  const handleClear = (event) => {
    event.preventDefault();
    clearLoginInfo(loginInfo);
    setLoginInfo({ email: "", password: "" });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="form-container">
        <h1>Login</h1>
        {/* react controlling form  */}
        <form>
          {/* mui generated input text field  */}
          <TextField
            id="email" label="Email" variant="outlined"
            name="email"
            sx={{ width: 280 }}
            value={loginInfo.email}
            onChange={handleChange}
          />
          <br /><br />

          {/* mui generated input text field  */}
          <TextField
            id="password" label="Password" variant="outlined"
            name="password"
            sx={{
              width: 280
            }}
            value={loginInfo.password}
            onChange={handleChange}
          />
          <br /><br />

          <StyledButton
            onClick={handleSubmit}
            sx={{
              width: 135,
              boxShadow: 'none'
            }}
            variant="contained">Login</StyledButton>

          <StyledButton
            onClick={handleClear}
            sx={{
              width: 135,
              boxShadow: 'none'
            }}
            variant="contained">Clear</StyledButton>
        </form>
      </div>
    </ThemeProvider>
  )
}

export default UserForm
