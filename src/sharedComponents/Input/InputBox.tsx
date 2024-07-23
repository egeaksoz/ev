import { FC, useState } from "react";
import './InputBox.scss'
import { Visibility, VisibilityOff } from  '@mui/icons-material'

interface InputTextProps {
  type?: string
}

const InputBox: FC<InputTextProps> = ( {type}: InputTextProps ) => {
  const placeholderText = `${type?.charAt(0).toUpperCase()}${type?.slice(1)}`
  const [inputType, setInputType] = useState(type)  
  const [toggleVisibilityIcon, setToggleVisibilityIcon] = useState(true)

  const handleToggle = () => {
    setInputType(inputType === "password" ? "text" : "password")
    setToggleVisibilityIcon(!toggleVisibilityIcon)
  }

  return (
    <div className="creds">
      <input id={type} name={type} aria-label={type} autoComplete={type} type={inputType} required/>
      <label htmlFor={type} aria-hidden="true">{placeholderText}</label>
      {type === "password" && <span role="button" onClick={handleToggle}>{toggleVisibilityIcon ? <Visibility /> : <VisibilityOff />}</span> }      
    </div>
  )
};

export default InputBox;
