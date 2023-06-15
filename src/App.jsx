import { useState } from "react";
import styles from './app.module.css'
function App() {
const countries=[{
  name:"India", 
  value:"In",
  cities:['Delhi','Mumbai']
},{
  name:"Pakistan", 
  value:"pak",
  cities:['lahore','karachi']
},{
  name:"Bangladesh", 
  value:"Bag",
  cities:['Dhaka','chattar']
}]
const [index,setIndex]=useState(0);
 
return (
  <>
  <div  className={styles.container}>

    <h1>Select  country</h1>
  
    <select className={styles.select} onChange={(e)=>setIndex(e.target.value)} >
    {countries.map((countries,ind)=>(
        <option key={ind}  value={ind}  >{countries.name}</option>
    ))}

    </select>
    <h1>Select state</h1>
    
    <select className={styles.select} >
    {countries[index].cities.map((countries, key)=>(

      <option key={key} value={key}>{countries}</option>
      )
      )
    }
    </select>
    
    </div>

  </>
  );
}

export default App;
