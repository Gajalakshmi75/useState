import React,{useState} from 'react'

const App = () => {
    const initialArray=[
    {
        id:"dvsfyeref",
        firstName:"lakshmi",
        lastName:"yarramsetti",
        age:21,
    },
    {
        id:"uhewgfuwgf",
        firstName:"Gaja",
        lastName:"lakshmi",
        age:20,
    },
    {
        id:"uhewgfuwf",
        firstName:"Gaja",
        lastName:"lakshmi",
        age:20,
    },
    {
        id:"uhewfuwgf",
        firstName:"Gaja",
        lastName:"lakshmi",
        age:20,
    },
    {
        id:"uhwgfuwgf",
        firstName:"Gaja",
        lastName:"lakshmi",
        age:20,
    },
    {
        id:"uhewgfugf",
        firstName:"Gaja",
        lastName:"lakshmi",
        age:20,
    },
];
const[data,setData]=useState(initialArray);
console.log(data);
const handleDelete=(comingId)=>{
    const filterData=data.filter((eachItem)=>{
        return eachItem.id!==comingId;
    });
    setData(filterData);
};
  return (
    <div>
        <ul>
            {
                data.map((eachItem,index)=>{
                    const{firstName,lastName,age,id}=eachItem;
                    return <li key={index}>
                        <div>
                            my firstname <strong>{firstName}</strong>
                        </div>
                        <div>
                            my lastname <strong>{lastName}</strong>
                        </div>
                        <div>
                            my age {age}
                        </div>
                        <button onClick={()=>handleDelete(id)}>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default App