import { FC } from "react";
import './TextInput.scss'

interface InputTextProps {
  inputText?: string
}

const TextInput: FC<InputTextProps> = ( props: InputTextProps ) => {
  return (
    <>
      <input className="creds" name={props.inputText} placeholder={props.inputText} aria-label={props.inputText} autoComplete={props.inputText}/>
    </>
  )
};

export default TextInput;
