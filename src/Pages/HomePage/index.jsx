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
        Se você é estudante de Engenharia de Software da FGA, aqui você
        consegue:
      </h1>
      <br />

      <h2 className="question">
        -{">"} gerar uma grade horária baseada nas prioridades de acordo com as
        matérias que você já fez
      </h2>
      <br />

      <h2 className="question">
        <br />
        Basta selecionar as disciplinas que já cursou e clicar em "Gerar grade"
        para visualizar a grade horária condizente com as disciplinas que você
        já cursou.
      </h2>

      <br />

      <button className="generateButton" onClick={handleClick}>
        {" "}
        Começar
      </button>
    </div>
  );
}

export default HomePage;
