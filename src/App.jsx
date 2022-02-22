import { useEffect, useState } from "react";
import Button from "./component/Button"

function App() {
const [count, setCount] = useState(0)

  const increment = ()=>{
    setCount(prev=>prev+1)
  }
  useEffect(()=>{
    console.log('app rendered')
  })
  return (
    <div>
      <button onClick={increment}>
      {count}
      </button>

      <Button>100</Button>
    </div>
  );
}

export default App;
