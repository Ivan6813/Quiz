import React, { useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import End from './components/End';

function App() {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState('');
  const [userCity, setUserCity] = useState('');
  let [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState('');

  function getUserName(name) {
    if(name.trim() === '') {
      return setError('Please, enter your name!');
    }else {
      setStep(2);
      setUserName(name.trim());
      setError('');
    }
  }

  function getUserCity(city) {
    if(city.trim() === '') {
      return setError('Please, enter your city!');
    }else {
      setStep(3);
      setUserCity(city.trim());
      setUserInfo(userInfo = userInfo.concat(city));
      setError('');
    }
  }

  function restart() {
    setUserName('');
    setUserCity('');
    setUserInfo([]);
    setStep(1);
  }

  return (
    <div className = 'app'>
        {step === 1 && <Start 
          getUserName = {getUserName}
          userName = {userName} 
          error = {error}
        />}
        {step === 2 && <Quiz 
          userName = {userName}
          userCity = {userCity}
          getUserCity = {getUserCity}
          error = {error}
          setError = {setError}
          userInfo = {userInfo}
          setUserInfo = {setUserInfo}
        />}
        {step === 3 && <End 
          restart = {restart}
          userName = {userName}
          userInfo = {userInfo}
        />}
    </div>
  );
}

export default App;