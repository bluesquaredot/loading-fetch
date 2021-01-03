import React, { useState, useEffect } from "react";
import "./style.css";
import Axios from 'axios'
export default function App() {
  const [person,setPerson] = useState(null),
  const [loading,setLoading] = useState(false)

  // useEffect(async () => {
  //   const response = await fetch('https://api.randomuser.me');
  //   const data  = await response.json();
  //   const [item] = data.results;
  //   setPerson(item);
  //   setLoading(false);
  // },[])

  //___________________________
 
  const getPerson=()=>{
    Axios.get('https://api.randomuser.me')
      .then((res)=>setPerson(res.data.results[0].name.first + ' ' + res.data.results[0].name.last))
      setLoading(true)
      }

useEffect(()=>setLoading(false),[person])

  return (
    <div>
    <button onClick={getPerson}>get person</button>
    {loading ? <h3 className="loading">is loading..</h3> : person}
    </div>
  );
}
 