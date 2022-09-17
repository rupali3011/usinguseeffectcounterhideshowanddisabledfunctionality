import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const[count,setcount]=useState(0);
  const[btn,setbtn]=useState(true);
  function Incrim(){
    setcount(count+2);
  }
  useEffect(()=>{
  Incrim();
  },[]);
  return (
    <div className="App">
     {btn?<h1>{count}</h1>:null}
     <button disabled={count==10?true:false}onClick={Incrim}>incriment</button>
     <button onClick={function(){setbtn(false)}}>hide</button>
     <button onClick={function(){setbtn(true)}}>show</button>
    </div>
  );
}
