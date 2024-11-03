import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() =>{
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);

    return(()=> clearInterval(interval))
    
  }, []);

  return (
    <>
      <div className="container">
        <h1>Digital Clock</h1>
        <div className="clock">
          <h2>{time}</h2>
        </div>
      </div>
    </>
  )
}

export default App
