import './App.css';
import { useState } from 'react';
import PopupMain from './components/popupMain/popupMain';
import PopupSuccess from './components/popupSuccess/popupSuccess';


function App() {

  const [data, setData] = useState('');
  const [successValue, setSuccessValue] = useState('false');

  const getRatingsValue = (ratingsValue) => {
    setData(ratingsValue);
  }

  const getSuccessValue = (successValue) => {
    setSuccessValue(successValue);
  }

  return (
    
    <div className="App">
      {successValue === 'false' && (
        <PopupMain
       ratingsValue={getRatingsValue} 
       successValue={getSuccessValue}/>
      )}
      {successValue === 'true' && (
        <PopupSuccess 
        ratingsValue={data}/>
      )}
    </div>
  );
}

export default App;
