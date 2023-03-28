import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import UserForm from  './pages/LoginForm'; // UserForm component function import
import LoginInfo from './pages/LoginInfo'; // LoginInfo component function import
import APIInfo from './components/APIInfo';

function App() {

  // useState hook to store login info datas as an array 
  const [loginInfos, setLoginInfos] = useState([]);

  // function to set current state data in above loginInfos array 
  const addLoginInfo = (loginInfo) => {
    setLoginInfos([...loginInfos, loginInfo])
  }

  // function to empty an array 
  const clearLoginInfo = () => {
    setLoginInfos([])
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserForm addLoginInfo={addLoginInfo} clearLoginInfo={clearLoginInfo}/>} />
          <Route path="/LoginInfo" element={<LoginInfo loginInfos={loginInfos} />} />
          <Route path="/APIInfo" element={<APIInfo/>} />
        </Routes>
      </Router>
    </div>
  );
}
           
export default App;

            // {/* props passing to UserForm component and LoginInfo component  */}
            // <UserForm addLoginInfo={addLoginInfo} clearLoginInfo={clearLoginInfo}/>
            // <LoginInfo loginInfos={loginInfos} />