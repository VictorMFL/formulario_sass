import React, { useState, Dispatch, SetStateAction } from "react";

import Input from "./Input";

import "../styles/components/Company.sass";

type NextFormProps = {
  setActive: Dispatch<SetStateAction<number>>;
};
const Company = ({ setActive }: NextFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActive(3);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Input
          id="nome"
          label="Nome"
          required={true}
          type="text"
          key="Nome"
          placeholder="Como prefere ser chamado"
          setValue={setName}
          value={name}
        />

        <Input
          id="telefone"
          label="Telefone"
          required={true}
          type="text"
          key="telefone"
          placeholder="Digite seu número de WhatsApp"
          setValue={setPhone}
          value={phone}
        />

        <Input
          id="email"
          label="E-mail"
          required={true}
          type="email"
          key="email"
          placeholder="Digite seu e-mail"
          setValue={setEmail}
          value={email}
        />
        <div className="container_button">
          <button type="submit">Continuar</button>
        </div>
      </form>
    </main>
  );
};

export default Company;
