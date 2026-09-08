import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  let [apiData, setApiData] = useState('');
  let [users, setUsers] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [role, setRole] = useState("user");

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

  return (
    <main className="app">
      <section className="auth-box">
        <h1>Sign up</h1>
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

export default Home
