import React from "react";
import "./style.css";
import MSelector from "../../Components/MateriaSelector/MSelector";

function Materiator() {
  const [qtdeMaterias, setQtdeMaterias] = React.useState();

  const handleChangeQtde = (event) => {
    setQtdeMaterias(event.target.value);
  };

  return (
    <>
      <div classname="Materiator">
        <h1 className="question"> Quais matérias c já fez?</h1>
      </div>

      <MSelector></MSelector>
    </>
  );
}

export default Materiator;
