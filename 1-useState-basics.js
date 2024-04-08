import React ,{useState}from "react";
const App=()=>{
    const [count,setCount]=useState(0);

    const incrementCount=()=>{
        setCount((prevCount)=>{
            return prevCount+1;
        });
        // setCount((prevCount)=>{
        //     return prevCount+1;
        // });
        setCount((prevCount)=>prevCount+1);
    };
    const decrementCount=()=>{
        setCount(count-1);
    }
    return <div>
        <button onClick={decrementCount}>-</button>
        <span>COUNT: {count}</span>
        <button onClick={incrementCount}>+</button>
    </div>
}
export default App;