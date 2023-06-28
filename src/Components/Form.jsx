import React from "react";

const Form = ({handleSubmit, setInputs}) => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor='input1'>Nombre:</label>
            <input type='text' id="input1" name="input1" onChange={(e) => setInputs((prevState) => ({...prevState, input1: e.target.value}))}></input>
            <label htmlFor='input2'>Email:</label>
            <input type='text' id="input2" name="input2" onChange={(e) => setInputs((prevState) => ({...prevState, input2: e.target.value}))}></input>
            <button id='submit-button' type='submit'>Enviar</button>
        </form>
    </div>
  );
};

export default Form;
