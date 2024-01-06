import React, {useContext} from 'react';
import './App.css';
import IndexPage from "./pages/index/IndexPage";
import {AuthContext, IAuthContext} from "react-oauth2-code-pkce";


function App() {
    const {token, tokenData, login, logOut} = useContext<IAuthContext>(AuthContext)

  return (
    <div className="App">
      <IndexPage/>
        <button onClick={()=>{login()}}>LOGIN</button>
        <h4>Access Token</h4>
        <pre>{token}</pre>
        <h4>User Information from JWT</h4>
        <pre>{JSON.stringify(tokenData, null, 2)}</pre>
    </div>
  );
}

export default App;
