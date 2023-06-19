import { useState } from 'react';
import './App.css';



function App() {
 

  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  function Timerstart(){
    setInterval(() => {
      setSec(sec + 1)
      if (sec==60) {
        setSec(0);
        setMin(min + 1);
        if (min==60) {
          setMin(0);
          setHr(hr + 1);
        }
      }
    }, 1000);
  }

  


  // const [variable, function] = useState(variable = value) 

  return (
    <div className="App">
      <div className='hr'>
        {hr}:
      </div>
      <div className='min'>
        {min}:
      </div>
      <div className='sec'>
        {sec}
      </div>
      <div className='button'>
        <button onClick={Timerstart}> Start</button>
  
      </div>
    </div>

  )
}
export default App;