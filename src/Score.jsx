
const Score = (props) => {
  return ( 
    <>
      <div className="score-container">
        {props.scores.map((score, idx) =>
              <div key={idx} className="card score-card" >
              <p>Score: {score.score}/Date:{score.date}</p> 
              </div>
            )}
      </div>
    </>
  );
}

export default Score