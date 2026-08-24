import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  let [apiData,setApiData] = useState([]);
  useEffect(()=>{
    async function api(){
    let res = await axios.get("http://localhost:4000/")
    console.log(res.data);
    setApiData(res.data)
    }
    api()
    
    // fetch("http://localhost:4000/").then((res)=>{
    //   return res.json()
    // }).then((data)=>{
    //   console.log(data);
    //   setApiData(data);
      
    // })
  },[])
  return (
    <div>
      {
        apiData.map((a)=>{
          return(<>
              <h1>{a.id}</h1>
              <h1>{a.name}</h1>
              <h1>{a.cllg}</h1>
           
          </>)
        })
      }
    </div>
  )
}

export default App