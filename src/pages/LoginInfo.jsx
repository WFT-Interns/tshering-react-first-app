import APIInfo from "../components/APIInfo";
import { Button, TextField, Autocomplete } from "@mui/material";
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/BlackTheme"
import axiosCreate from "../config/axios.cofig";
import { useQuery } from "react-query";

export default function LoginInfo({ loginInfos }) {

  // useState to display APIInfo component on generate button click
  const [isGenerated, setIsGenerated] = useState(false);

  // handling generate button
  function handleGenerate() {
    setIsGenerated(true);
  }

  // api request handling
  const fetchGases = async () => {
    try {
      const response = await axiosCreate.get();
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // api data fetching
  const { data, isLoading, error, status } = useQuery(
    "gasName",
    fetchGases
  );

  // selected value from dropdown menu
  const [value, setValue] = useState(null)

  return (

    <ThemeProvider theme={theme}>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: </p>}

      {status === "success" && (
        <>
          {/* mapping login details */}
          {loginInfos.map((loginInfo) => (
            <div className="card" key={loginInfo.email}>
              <p>Welcome, {loginInfo.email}</p>
            </div>
          ))}

          {/* Heading */}
          <h1>Select Gas Type</h1>

          {/* dropdown box */}
          <Autocomplete
            // controlled state
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            id="combo-box-demo"
            options={data && Object.keys(data)}
            sx={{
              width: 300
            }}
            renderInput={(params) => <TextField {...params} label="Gas Type" />}
          />

          {/* mui generated button  */}
          <Button
            sx={{
              marginTop: 3,
              width: 100
            }}
            variant="contained"
            onClick={handleGenerate}>Generate</Button>

          {isGenerated ? <APIInfo value={value} /> : ''}

        </>
      )}

    </ThemeProvider>
  );
}
