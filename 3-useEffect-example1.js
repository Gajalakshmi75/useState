import React, { useEffect, useState } from 'react'

const URL="https://jsonplaceholder.typicode.com/users";

const App = () => {
    const[userdata,setuserdata]=useState([]);
    const [loading,setLoading]=useState(false); 
    const[isError,setIserror]=useState({status:false,msg:""}); 
        const fetchUserdata= async (apiURL)=>{
            setLoading(true);
            setIserror({status:false,msg:''})
            try{
                const response= await fetch(apiURL);
                const data= await response.json();
                setuserdata(data);
                setLoading(false);
                setIserror({status:false,msg:''});
            }catch(error){
                setLoading(false);
                setIserror({status:true,msg:"something went wrong,plz try again!!"})
            };
    };

    useEffect(()=>{
        fetchUserdata(URL);
    },[]);

    if(loading){
        return <div>
            <h3>Loading....</h3>
        </div>
    };
    if(isError?.status){
        return <div>
            <h3 style={{color:"red"}}>{isError?.msg}</h3>
        </div>
    }
  return (
    <div>useEffect example -1
        <ul>
            {
                userdata.map((eachUser)=>{
                    const {id,name,email,phone}=eachUser;
                    return <li key={id}>
                        <div>{name}</div>
                        <div>{email}</div>
                        <div>{phone}</div>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default App ;