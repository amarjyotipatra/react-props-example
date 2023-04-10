import "./styles.css";
import ChildValue from "./Child.js"
import {useState} from "react"

export default function App(props) {
  let [counter,setCounter]=useState(0)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={()=>setCounter(++counter)}>Add</button>
      <ChildValue counterValue={counter} />
    </div>
  );
}
