import React, { useEffect, useState } from 'react'
const URL="www.thecocktaildb.com/api/json/v1/1/search.php?s=l";
const App = () => {
    const [drinkdata,setDrinkdata]=useState([]);

    const fetchDrink= async (apiURL) => {
        const response= await fetch(apiURL);
        const {drinks}= await response.json();
        setDrinkdata(drinks);
        console.log(drinks);
    };
    useEffect(()=>{
        fetchDrink(URL);
    },[]);

  return (
    <div>
      <form>
        <input type="text" name="search" id="search" placeholder='"seach something new'/>      </form>
        <hr/>
        <ul>
          
            {drinkdata.map((eachDrink)=>{
              const {idDrink,strDrink,strDrinkThumb}=eachDrink;
              return <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink}/>
                </div>
                <div className='text'>
                  <h3>{strDrink}</h3>
                </div>
              </li>

            })}
      
        </ul>
    </div>
  );
};

export default App;