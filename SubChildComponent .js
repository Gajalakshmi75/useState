import React,{useContext} from 'react';
import { UserContext } from '../../context/UserContext';

const SubChildComponent=({})=>{
    const data=useContext(UserContext);
    console.log(data);
    const {firstName,lastName,email}=data;
    return <div>
        <h3>SubChildComponent</h3>
        <div>firstName:{firstName}</div>
        <div>lastName:{lastName}</div>
        <div>email:{email}</div>
    </div>
};
export default SubChildComponent;