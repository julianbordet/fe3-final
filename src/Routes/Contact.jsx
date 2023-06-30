import React from 'react'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state, dispatch } = useGlobalContext();

  const [inputs, setInputs] = useState({
    input1: '',
    input22: ''
  })

  const [mostrar, setMostrar] = useState(false);

  const [inputsValidos, setinputsValidos] = useState(false);

  var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrar(true);
    if(inputs.input1.length > 5 && inputs.input2.match(validEmailRegex)) {
      setinputsValidos(true);
    } else {
      setinputsValidos(false);
    }
  }

  return (
    <section className={state.theme === 'dark' ? 'routesDark' : 'routesLight'}>
      <Navbar/>
      <div className="contactSection">
        <h2  className={state.theme === 'dark' ? 'contactItem typographyDark' : 'contactItem typographyLight'}>Quiere saber mas?</h2>
        <p className={state.theme === 'dark' ? 'contactItem typographyDark' : 'contactItem typographyLight'}>Envienos sus preguntas y lo contactaremos</p>
        <Form handleSubmit={handleSubmit} setInputs={setInputs}/>
        {mostrar && !inputsValidos && <span>Por favor verifique su información nuevamente</span>} 
        {mostrar && inputsValidos && <span>Gracias!, te contactaremos cuando antes vía mail</span>}
      </div>
      <Footer/>
    </section>
  )
}

export default Contact