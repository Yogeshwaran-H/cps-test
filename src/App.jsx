import Theader from "./Theader"
import Tbody from "./Tbody"
import Seconds from "./Seconds"
import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [info, setInfo] = useState({
    timer: 0,
    cps: 0,
    clicks: 0,
    starting: 0,
    isStarting:false
  })

  
  useEffect(() => {
    console.log(info.timer == 0, info.clicks == 0);

    if (info.timer == 0 || info.clicks == 0) {
      return; 
    }
    const timeout = setTimeout(() => {
      setInfo((prev) => ({
        ...prev,
        cps: prev.clicks / prev.starting,
        timer: prev.timer - 1
      }))
    }, 1000);
    return () => clearTimeout(timeout);
  }, [info.timer,info.isStarting]);

  return (
    <div className="App">
      <Seconds setInfo={setInfo} />
      <Theader info={info} />
      <Tbody setInfo={setInfo} />
    </div>
  )
}

export default App
