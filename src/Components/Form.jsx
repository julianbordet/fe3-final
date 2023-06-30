import React from "react";
import { useGlobalContext } from "./utils/global.context";

const Form = ({handleSubmit, setInputs}) => {

  const { state } = useGlobalContext();

  return (
    <div>
      <form onSubmit={handleSubmit} className='contactForm'>
            <label className={state.theme === 'dark' ? 'formItem typographyDark' : 'formItem typographyLight'} htmlFor='input1'>Nombre:</label>
            <input className={state.theme === 'dark' ? 'formItem typographyDark' : 'formItem typographyLight'} type='text' id="input1" name="input1" onChange={(e) => setInputs((prevState) => ({...prevState, input1: e.target.value}))}></input>
            <label className={state.theme === 'dark' ? 'formItem typographyDark' : 'formItem typographyLight'} htmlFor='input2'>Email:</label>
            <input className={state.theme === 'dark' ? 'formItem typographyDark' : 'formItem typographyLight'} type='text' id="input2" name="input2" onChange={(e) => setInputs((prevState) => ({...prevState, input2: e.target.value}))}></input>
            <button className="formItem submitButton" id='submit-button' type='submit'>Enviar</button>
        </form>
    </div>
  );
};

export default Form;
