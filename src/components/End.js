import data from "../data.json"

function End({ restart,  userName, userInfo}) {

  return(
    <div className="card">
      <h3 className="question">Result</h3>
      <ul className="list">
        <li className="item">Name : {userName}</li>
        {data.questions.map((item, i)=>{
          return <li className="item">{item.quest} : {userInfo[i]}</li>
        })}
      </ul>
      <button className="btn" onClick={restart}>Повторить</button>
    </div>
  );
}

export default End;