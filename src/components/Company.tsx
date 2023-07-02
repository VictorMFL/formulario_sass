import React, { useState, Dispatch, SetStateAction } from "react";

import Input from "./Input";
import TextArea from "./TextArea";

type NextFormProps = {
  setActive: Dispatch<SetStateAction<number>>;
};
const Company = ({ setActive }: NextFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActive(3);
  }

  function backForm() {
    setActive(1);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Input
          id="nome"
          label="Nome da empresa"
          required={true}
          type="text"
          key="Nome"
          placeholder="Qual é o nome da empresa"
          setValue={setName}
          value={name}
        />

        <Input
          id="funcionarios"
          label="Número de funcionários"
          required={true}
          type="text"
          key="funcionarios"
          placeholder="Digite o número de colaboradores"
          setValue={setPhone}
          value={phone}
        />

        <TextArea
          id="negocio"
          label="Sobre seu negócio"
          required={true}
          key="negocio"
          placeholder="Fale um pouco sobre seus produtos ou serviços"
          setValue={setBusiness}
          value={business}
          cols={30}
          rows={5}
        />
        <div className="container_button">
          <button type="submit" className="button_voltar" onClick={backForm}>
            VOLTAR
          </button>
          <button type="submit">Continuar</button>
        </div>
      </form>
    </main>
  );
};

export default Company;
