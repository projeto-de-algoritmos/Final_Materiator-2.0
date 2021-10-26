import "./style.css";
import { materiaScheduler, sortPriorites } from "../../algorithm";

function Priorities(history) {
  let subjectPriorities = history.location.state.subjectPriorities;
  let userSubjects = history.location.state.userSubjects;
  console.log(history);
  let sortedPriorites = sortPriorites(subjectPriorities);

  let grade = materiaScheduler(sortedPriorites, userSubjects);

  console.log(subjectPriorities);
  console.log(sortedPriorites);

  function toEmptyString(grade) {
    grade.forEach(function (coluna, idxCol) {
      for (let index = 0; index < 6; index++) {
        const linha = coluna[index];
        if (!linha) {
          grade[idxCol][index] = " - ";
        }
      }
    });
  }

  toEmptyString(grade);

  return (
    <>
      <div className="inform">
        <h1> Grade Horária</h1>

        <h3>Grade horária com as matérias prioritárias</h3>
      </div>

      <div className="result">
        <div className="priorityLabel"> - </div>

        <div className="priorityLabel"> SEG </div>
        <div className="priorityLabel"> TER </div>
        <div className="priorityLabel"> QUA </div>
        <div className="priorityLabel"> QUI </div>
        <div className="priorityLabel"> SEX </div>
        <div className="priorityLabel"> SAB </div>
      </div>

      <div className="result">
        <div className="time">
          <div className="priorityLabel">
            <div className="subjectName">8h </div>
          </div>
          <div className="priorityLabel">
            <div className="subjectName">10h </div>
          </div>
          <div className="priorityLabel">
            <div className="subjectName">12h </div>
          </div>
          <div className="priorityLabel">
            <div className="subjectName">14h </div>
          </div>
          <div className="priorityLabel">
            <div className="subjectName">16h </div>
          </div>
          <div className="priorityLabel">
            <div className="subjectName">18h </div>
          </div>
        </div>

        {grade.map((coluna, idx) => {
          if (coluna.length > 0) {
            return (
              <div className="prioritygroup">
                {coluna.map((linha, idx) => (
                  <div className="subject" key={idx}>
                    <div className="subjectName">{linha}</div>
                  </div>
                ))}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Priorities;
