import { Dispatch, SetStateAction, useState } from "react";
import TextArea from "./TextArea";

type FormProps = {
  setActive: Dispatch<SetStateAction<number>>;
};

const Project = ({ setActive }: FormProps) => {
  const [objective, setObjective] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert("Formulário enviado. Obrigado!")
    setActive(1);
  }

  function backForm() {
    setActive(2);
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <TextArea
          id="objetivo"
          label="Objetivos do projeto"
          key="objetivo"
          cols={30}
          rows={5}
          placeholder="Descreva quais os objetivos desse projeto"
          required={true}
          value={objective}
          setValue={setObjective}
        />
        <div className="button_company">
          <button type="submit" className="button_voltar" onClick={backForm}>
            VOLTAR
          </button>
          <button type="submit">Continuar</button>
        </div>
      </form>
    </main>
  );
};

export default Project;
