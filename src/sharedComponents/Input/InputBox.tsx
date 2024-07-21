import { FC, useState } from "react";
import './InputBox.scss'

interface InputTextProps {
  type?: string
}

const InputBox: FC<InputTextProps> = ( {type}: InputTextProps ) => {
  const placeholderText = `${type?.charAt(0).toUpperCase()}${type?.slice(1)}`
  const [inputType, setInputType] = useState(type)  
  const [showText, setShowText] = useState("Show")

  const handleToggle = () => {
    const newType = inputType === "password" ? "text" : "password"
    setInputType(newType)
    const newShowText = showText === "Show" ? "Hide" : "Show"
    setShowText(newShowText)
  }

  return (
    <div className="creds">
      <input id={type} name={type} aria-label={type} autoComplete={type} type={inputType} required/>
      <label htmlFor={type} aria-hidden="true">{placeholderText}</label>
      {type === "password" && <span id="show-password" role="button" onClick={handleToggle}>{showText}</span> }
    </div>
  )
};

export default InputBox;
