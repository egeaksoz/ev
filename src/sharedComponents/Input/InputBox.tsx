import { FC } from "react";
import './InputBox.scss'

interface InputTextProps {
  type?: string
}

const InputBox: FC<InputTextProps> = ( {type}: InputTextProps ) => {
  const placeholderText = `${type?.charAt(0).toUpperCase()}${type?.slice(1)}`
  return (
    <div className="creds">
      <input id={type} name={type} aria-label={type} autoComplete={type} type={type == "password" ? "password" : "text"} required/>
      <label htmlFor={type} aria-hidden="true">{placeholderText}</label>
    </div>
  )
};

export default InputBox;
