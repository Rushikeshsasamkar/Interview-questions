
import { useState} from "react";
import {ComponentA} from "./ComponentA";
import {ComponentB} from "./ComponentB";
function App() {
  const [inputA,setInputA] = useState("");
  const [inputB,setInputB] = useState("");
  
  const setTheValue = (value,source) => {
      if(source ==='A'){
          setInputA(value*2);
      }
      else if(source ==='B'){
        setInputB(value/2);
      }
  }

  return (

    <div className="App">
      <ComponentA setTheChange={setTheValue} valueA={inputB}/>
      <ComponentB setTheChange={setTheValue} valueB={inputA}/>

    </div>
  );
}

export default App;
