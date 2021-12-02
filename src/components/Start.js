import data from '../data.json';

const Start = ({ userName, getUserName, error }) => {

  return(
    <div className="card">
          <h1 className="title">Start Quiz</h1>
          <input className="input" 
                 placeholder="Enter your name" 
                 type="text" 
                 onChange={(event) => {userName = event.target.value}}
          />
          {error && <div className="err">{error}</div>}
          <button className="btn" onClick={()=>getUserName(userName)}>       
          {data.nameStartButton}
          </button>
      </div>
  );
}

export default Start;