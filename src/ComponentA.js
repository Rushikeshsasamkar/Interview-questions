import {React,useState} from 'react'

export const ComponentA = ({setTheChange,valueA}) => {
    const [input, setInput] = useState();

    const handleChange =(e)=>{

        const value = e.target.value;
        setInput(value);
        setTheChange(value,'A')

    }
    
   
  return (
    <div>
        <h1>Component A</h1>
          <input type="text" onChange={handleChange} placeholder={valueA}/>
    </div>
  )
}
