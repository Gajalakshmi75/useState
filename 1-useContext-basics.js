import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const App=()=>{
    const [userDetails,setuserDetails]=useState({
        firstName:"gaja",
        lastName:"Yarramsetti",
        email:"gajalakshmi@gmail.com",
    });

    return <div>
        <h1>useContext Parent Component</h1>
        <ChildComponent userDetails={userDetails}/>
    </div>
};
export default App;