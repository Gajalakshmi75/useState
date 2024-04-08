import React,{useState} from 'react'

const App = () => {
    const[firstname,setFirstname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    // const changeFirstname=(e)=>{
    //     console.log(e.target.value);
    //     setFirstname(e.target.value);
    // };
    // const changeEmail=(e)=>{
    //     console.log(e.target.value);
    //     setEmail(e.target.value);
    // };
    // const changePassword=(e)=>{
    //     console.log(e.target.value);
    //     setPassword(e.target.value);
    // };

    // const handleInputChange=(e,name)=>{
    //     console.log(e.target.value,name);
    //     if(name==="firstname"){
    //         setFirstname(e.target.value);
    //     }else if(name==="email"){
    //         setEmail(e.target.value)
    //     }else if(name==="password"){
    //         setPassword(e.target.value);
    //     }
    // };


    const handleSubmit=(e)=>{
        e.preventDefault();
        let userObj={
            firstname:firstname,
            email:email,
            password:password,
        };
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-content'>
            {/* <input type="text" name="firstname" value={firstname} id="firstname" placeholder='enter your name' onChange={changeFirstname}/> */}
            {/* <input type="text" name="firstname" value={firstname} id="firstname" placeholder='enter your name' onChange={(e)=>handleInputChange(e,"firstname")}/> */}
            <input type="text" name="firstname" value={firstname} id="firstname" placeholder='enter your name' onChange={(e)=>setFirstname(e.target.value)}/>
            </div>
            <div className='form-content'>
            <input type="email" name="email" id="email" value={email}placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='form-content'>
            <input type="password" name="password" id="password" value={password} placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='form-content'>
                <button type="submit">submit</button>
            </div>
        </form>
    </div>
  );
};

export default App

