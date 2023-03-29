import APIInfo from "../components/APIInfo";
import { Button } from "@mui/material";
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/BlackTheme"

export default function LoginInfo({loginInfos}) {

  const[isGenerated, setIsGenerated] = useState(false);

  function handleGenerate(){
    setIsGenerated(true);
  }

  return (
      <ThemeProvider theme={theme}>
        {loginInfos.map((loginInfo) => (
          <div className="card" key={loginInfo.email}>
            <p>{loginInfo.email}</p>
            <p>{loginInfo.password}</p>
          </div>
        ))}

        {/* mui generated button  */}
        <Button 
          sx={{
            width: 100
            }} 
          variant="contained" 
          onClick={handleGenerate}>Generate</Button>
      
        { isGenerated ? <APIInfo /> : ''}

      </ThemeProvider>
    );
}
