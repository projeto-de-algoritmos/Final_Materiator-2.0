import "./style.css";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  function handleClick() {
    history.push({ pathname: "/materiator" });
  }

  return (
    <div className="HomePage">
      <h1 className="question">Welcome to Materiator!</h1>
      <br />

      <h1 className="question">
        {" "}
        Se você é estudante de Engenharia de Software da FGA, aqui você consegue: 
      </h1>
      <br />

      <h2 className="question">
      -{'>'} descobrir facilmente quais as matérias prioritárias para se matricular <br />
      -{'>'}  gerar uma grade horária baseada nessas prioridades e em quantas matérias você deseja cursar
      </h2>
      <br />

      <h2 className="question">
      Tudo isso levando em consideração as disciplinas que você já cursou e os pré-requisitos de todas.
      <br />
      Basta selecionar as disciplinas que já cursou e quantas quer cursar nesse semestre, e assim lhe será mostrado 
      listas das matérias com prioridade 1, 2, 3... Após isso, clique em "Gerar grade" para visualizar a grade horária baseada nas 
      prioridades e na quantidade de disciplinas que você escolheu fazer
      </h2>

      
      <br />
      <br />

      <button className="generateButton" onClick={handleClick}>
        {" "}
        Começar
      </button>
    </div>
  );
}

export default HomePage;
