import { useState } from 'react';
import './App.css';
import { clear } from '@testing-library/user-event/dist/clear';



function App() {


  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  {
    const timer = setInterval(() => {
      setSec(sec + 1)
      if (sec === 59) {
        setSec(0);
        setMin(min + 1);
        if (min === 59) {
          setMin(0);
          setHr(hr+1);
        }
      }
      clearInterval(timer);
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
     
    </div>



  )

}

export default App;