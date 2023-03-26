import { useState } from 'react';
import './App.css';
import UserForm from './components/LoginForm'; // UserForm component function import
import LoginInfo from './components/LoginInfo'; // LoginInfo component function import

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
      {/* props passing to UserForm component and LoginInfo component  */}
      <UserForm addLoginInfo={addLoginInfo} clearLoginInfo={clearLoginInfo}/>
      <LoginInfo loginInfos={loginInfos} />
    </div>
  );
}

export default App;