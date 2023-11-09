import { useEffect, useState } from "react";
import { Light } from "./Light";

export function App () {

  const [activeLight, setActiveLight] = useState("red")

  useEffect(()=>{
    const interval=setInterval(()=>{
      switch (activeLight){
        case "red":
          setActiveLight("yellow");
          break;
          case "yellow":
            setActiveLight("green");
            break;
            case "green":
              setActiveLight("red");
      }
    }, 3000);
    return () => clearInterval(interval);

  });

  return(
    <>
    <div className="stick"/>
    <div className="trafficLight">
      <Light color="red" opacity={activeLight === "red" ? 1:0.4}/>
      <Light color="yellow" opacity={activeLight === "yellow" ? 1:0.4}/>
      <Light color="green"  opacity={activeLight === "green" ? 1:0.4}/>
      </div>
      <h1 style={{margin:"auto", width:"fit-content"}}>{activeLight}</h1>
    </>
    
  )
}
export default App;