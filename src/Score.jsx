
const Score = (props) => {
  return ( 
    <>
      {props.scores.map((score, idx) =>
        <div key={idx} >
          <p>Score: {score.score}/Date:{score.date}</p> 
        </div>
      )}
      
    </>
  );
}

export default Score