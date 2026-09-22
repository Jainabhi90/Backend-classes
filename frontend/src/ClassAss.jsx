import React from 'react'
import { useState } from 'react'

const ClassAss = () => {
  let [apiData, setApiData] = useState('');
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  async function signup(e) {
    e.preventDefault()

    let res = await fetch("http://localhost:3000/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })

    let data = await res.json()
    setApiData(data)
  }

  return (
    <main className="app">
      <section className="auth-box">
        <h1>give your details</h1>
        <form onSubmit={signup}>
          <input
            placeholder="name"
            onChange={(e) => { setName(e.target.value) }}
          />

          <input
            placeholder="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />

          <button type="submit">Send</button>
        </form>

        {apiData && (
          <ul>
            <li>Name: {apiData.name}</li>
            <li>Email: {apiData.email}</li>
          </ul>
        )}
      </section>
    </main>
  )
}

export default ClassAss
