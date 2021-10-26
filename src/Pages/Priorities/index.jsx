import "./style.css";

function Priorities(history) {
  let subjectPriorities = history.location.state.subjectPriorities;
  console.log(history);
  let sortedPriorites = sortPriorites(subjectPriorities);

  console.log(subjectPriorities);
  console.log(sortedPriorites);

  function handleClick() {
    
  }
  
  function toEmptyString(grade) {
    grade.forEach(function (coluna, idxCol) {

      for (let index = 0; index < 6; index++) {
        const linha = coluna[index];
        if (!linha) {
          grade[idxCol][index] = " - "
        }
      }

    }); 
  }

  let grade = [
        [ "C1", , "C1", "C1", , "APC"],
        [ "APC", , "DIAC", "IAL", "DIAC", ],
        [ "IAL", ,"IAL" , "APC", , "Fisica1"],
        [ "EA", ,"EA" , , "IE", ],
        [ , , , , "EA",],
        [ , , , , , ],
      ]

    toEmptyString(grade)


  return (
    <>
      <div className="inform">
        <h1> Grade Horária</h1>

        <h3>
          Grade horária com as matérias prioritárias
        </h3>
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

      <div className="inform">
        <button className="generateButton" onClick={handleClick}>
            {" "}
            Gerar grade
        </button>
      </div>
      

    
    </>
  );
}

export default Priorities;

//elems with priority 7 comes first
function sortPriorites(subjectPriorities) {
  let arraytop = [[], [], [], [], [], [], []];

  for (const subject in subjectPriorities) {
    arraytop[7 - subjectPriorities[subject].priority].push(
      subjectPriorities[subject]
    );
  }

  return arraytop;
}
