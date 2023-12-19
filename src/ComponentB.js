import {React,useState} from 'react'

export const ComponentB = ({setTheChange,valueB}) => {
const [input,setInput] = useState();

    const handleChange = (e) => {

        const value = e.target.value;
        setInput(value);
        setTheChange(value,'B');

    }

  return (
    <div>
        <h1>Component B</h1>
        <input type="text" onChange={handleChange} placeholder={valueB}/>
    </div>
  )
}
