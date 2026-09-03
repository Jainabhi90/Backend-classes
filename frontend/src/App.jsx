import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const App = () => {
  let [apiData, setApiData] = useState('');
  let [users, setUsers] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [role, setRole] = useState("user");
  let [token , setToken] = useState("")

  async function login() {
    let res = await axios.post("http://localhost:3000/login", {
      email,
      pass
    })

    console.log(res.data);
    setApiData(res.data);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
  }

  async function signup() {
    let res = await axios.post("http://localhost:3000/signUp", {
      name,
      email,
      pass,
      role
    })

    console.log(res.data);
    setApiData(res.data)
  }

  async function getApiData() {
    let token = localStorage.getItem("token");

    let res = await axios.get("http://localhost:3000/api", {
      headers: {
        Authorization: token
      }
    })

    console.log(res.data);
    setApiData(res.data);
  }

  return (
    <div>
      <input
        placeholder="name"
        onChange={(e) => { setName(e.target.value) }}
      />

      <input
        placeholder="email"
        onChange={(e) => { setEmail(e.target.value) }}
      />

      <input
        placeholder="pass"
        type="password"
        onChange={(e) => { setPass(e.target.value) }}
      />

      <input
        placeholder="role"
        value={role}
        onChange={(e) => { setRole(e.target.value) }}
      />

      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>

      {apiData && typeof apiData === "object" && (
        <ul>
          <li>Name: {apiData.name}</li>
          <li>Email: {apiData.email}</li>
        </ul>
      )}

    </div>
  )
}

export default App