import { ChangeEvent, Dispatch, SetStateAction } from "react";

import '../styles/components/Input.sass'

type InputProps = {
  id: string;
  label: string;
  type: string;
  required: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
};

const Input = ({
  id,
  label,
  required,
  type,
  placeholder,
  value,
  setValue,
}: InputProps) => {
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
