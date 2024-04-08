import React ,{useEffect,useState}from 'react'

const App = () => {
    const[count,setCount]=useState(0);
    const[pageWidth,setPagewidth]=useState(window.innerWidth);

    useEffect(()=>{
        const resizeHandler=()=>{
            setPagewidth(window.innerWidth);
        };
        window.addEventListener("resize",resizeHandler);
        console.log("hello iam oming from useEffect",count);
        return ()=>{
            window.removeEventListener("resize",resizeHandler)
        };
        
    });

  return (
    <div>
        <h1>useEffect</h1>
        <h1>{pageWidth}</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count+1);
        }}>+</button>
    </div>

  )
}

export default App