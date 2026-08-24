import React from 'react'
import { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
    fetch("http://localhost:4000/").then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      
    })
  },[])
  return (
    <div>App</div>
  )
}

export default App