import APIInfo from "../components/APIInfo";
import React, { useState } from 'react';

export default function LoginInfo({loginInfos}) {

  const[isGenerated, setIsGenerated] = useState(false);

  function handleGenerate(){
    setIsGenerated(true);
  }

  return (
      <>
        {loginInfos.map((loginInfo) => (
          <div className="card" key={loginInfo.email}>
            <p>{loginInfo.email}</p>
            <p>{loginInfo.password}</p>
          </div>
        ))}

        <button onClick={handleGenerate}>Generate</button>

        { isGenerated ? <APIInfo /> : ''}

      </>
    );
}
