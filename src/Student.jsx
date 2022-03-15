import Score from './Score'

const Student = (props) => {
  return (
    <>
      {props.students.map((student, idx) => 
        <div key={idx}>
          <h2>Name:{student.name}</h2>
          <p>Bio: {student.bio}</p>
          <Score scores={student.scores}/>
        </div>
        )}
    </>
  )
}

export default Student