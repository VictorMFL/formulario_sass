import { ChangeEvent, Dispatch, SetStateAction } from "react";

import "../styles/components/TextArea.sass";

type TextAreaProps = {
  id: string;
  label: string;
  required: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  cols: number;
  rows: number;
};

const TextArea = ({
  id,
  label,
  required,
  placeholder,
  value,
  setValue,
  cols,
  rows,
}: TextAreaProps) => {
  function handleChange({ target }: ChangeEvent<HTMLTextAreaElement>) {
    setValue(target.value);
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        cols={cols}
        rows={rows}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></textarea>
    </>
  );
};

export default TextArea;
