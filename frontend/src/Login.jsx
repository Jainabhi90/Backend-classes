import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  let [apiData, setApiData] = useState('');
  let [users, setUsers] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [role, setRole] = useState("user");
  let [token , setToken] = useState("")
  let navigate = useNavigate();

  async function login() {
    let res = await axios.post("http://localhost:3000/login", {
      email,
      pass
    })

    console.log(res.data);
    setApiData(res.data);
    let token = res.data.token;
    if(token){
        navigate("/dash")
    }

    if (res.data.token) {
      localStorage.setItem("token",token);
    }

    setTimeout(() => {
      localStorage.removeItem("token");
      alert("you have been logout login again")
      navigate("/");
    }, 60000);
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
    <main className="app">
      <section className="auth-box">
        <h1>Login</h1>
        <input
          placeholder="email"
          onChange={(e) => { setEmail(e.target.value) }}
        />

        <input
          placeholder="pass"
          type="password"
          onChange={(e) => { setPass(e.target.value) }}
        />

        <button onClick={login}>Login</button>

        {apiData && typeof apiData === "object" && (
          <ul>
            <li>Name: {apiData.name}</li>
            <li>Email: {apiData.email}</li>
          </ul>
        )}
      </section>
    </main>
  )
}

export default Login
