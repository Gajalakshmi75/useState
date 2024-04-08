import React ,{useEffect,useState}from 'react'

const App = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("hello iam oming from useEffect");
    },[]);

  return (
    <div>USEeffect
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count+1);
        }}>+</button>
    </div>

  )
}

export default App