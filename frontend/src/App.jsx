import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  let [apiData,setApiData] = useState('');
  let [users,setUsers] = useState([]);
  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [pass,setPass] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setUsers(res.data);
    });
  }, []);

  async function login(){
    let res = await axios.post("http://localhost:3000/login",{email, pass})
    console.log(res.data);
    setApiData(res.data)
  }
  async function signup(){
    let res = await axios.post("http://localhost:3000/signUp",{name, email, pass})
    console.log(res.data);
    setApiData(res.data)
  }
  return (
    <div>
      <input placeholder='name' onChange={(e)=>{setName(e.target.value)}}></input>
      <input placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input placeholder='pass' onChange={(e)=>{setPass(e.target.value)}}></input>
      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>
      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App