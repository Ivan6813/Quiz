import React, { useState, useEffect, useRef } from 'react';
import data from '../data.json';


function Quiz({userName, userCity, getUserCity, error, setError, userInfo, setUserInfo}) {
  const [selectedOption, setSelectedOption] = useState('');
  let [count, setCount] = useState(0);
  const inputsWrapper = useRef();

  useEffect(() => {
    const checkedInput = inputsWrapper.current.querySelector('input:checked');
    if(checkedInput) {
      checkedInput.checked = false;
    }
  }, [count]);

  function chooseOption(event) {
    setSelectedOption(event.target.value);
    if(error) {
      setError('');
    }
  }
  
  function showNextQuestion() {
    if(selectedOption === '') {
      return setError('Please, select one of options!');
    }
    setUserInfo(userInfo = userInfo.concat(selectedOption));
    setSelectedOption('');
    setCount(count + 1);
  }

  return(
    <div className="card">
      <div className="user">Опрос проходит: {userName}</div>
        <h2 className="question">{data.questions[count].quest}</h2>
        <div ref={inputsWrapper}>
          {(data.questions[count].answerType === "text") ? (
            <>
              <input type="text" 
                     className="input" 
                     placeholder="Enter your city"
                     onChange={(event)=>{userCity=event.target.value}}
              />
              {error && <div className="err">{error}</div>}
              <button className="btn" onClick={()=>getUserCity(userCity)}>
                {data.nameFinishButton}
              </button>
            </>
          ):(
            <>
              <ul className="list">
                {data.questions[count].answers.map((item) => (
                  <li className="item" key={item.id}>
                    <label htmlFor={item.id} className="label">
                      <input type={data.questions[count].answerType} 
                             name={data.questions[count].id} 
                             value={item.answer} 
                             id={item.id}
                             className="label-input"
                             onChange={chooseOption}
                      />
                      {item.answer}
                    </label>
                  </li>
                ))}
              </ul>
              {error && <div className="err">{error}</div>}
              <button className="btn" onClick={showNextQuestion}>
                {data.nameNextButton}
              </button>
            </>
          )}
        </div>
    </div>
  );
}

export default Quiz;