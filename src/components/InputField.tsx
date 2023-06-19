import React, { FC } from 'react';
import style from "../styles/InputField.module.scss"

interface InputFieldProps {
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  testid: string;
}

const InputField: FC<InputFieldProps> = ({ type = 'text', value, onChange, label, testid }) => {
  return (
    <div className={style.container}>
      {label && <div className={style.label}>{label}</div>}
      <input
        data-testid={testid}
        className={label ? style.formInput : style.input}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
