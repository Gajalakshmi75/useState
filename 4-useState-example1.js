import React,{useState} from 'react'

const App = () => {
    const [showdata,setShowdata]=useState(false);
    const handleChange=()=>{
        setShowdata(!showdata);
    }
  return (
    <div>
        <button onClick={handleChange}>{showdata ? "hide" : "show"}</button>
        {showdata && (
            <div className='content'>
                A movie recommendation system is a fancy way to describe a process that
                 tries to predict your preferred items based on your or people similar to 
                 you.In laymans terms, we can say that a Recommendation System is a tool 
                 designed to predict/filter the items as per the users behavior.
            </div>
        )}
    </div>
  )
}

export default App;