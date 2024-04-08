import React, { useState } from 'react'

const App = () => {
    // const initialObj={
    //     firstName:"Lakshmi",
    //     lastName:"Yarramsetti",
    // };
    const [data,setData]=useState({
        firstName:"Lakshmi",
        lastName:"Yarramsetti",
    });

    const changeFirstName=()=>{
        setData({
            ...data,
            firstName:"gaja",
        })
    }
  return (
    <div>
        <h1>My Firstname is {data.firstName}</h1>
        <button onClick={changeFirstName}>change firstName</button>
        <h1>My Lastname is {data.lastName}</h1>
    </div>
  )
}

export default App