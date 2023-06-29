import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state, dispatch } = useGlobalContext();
  const { id } = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;

  useEffect(() => {
    axios(url)
      .then(res => dispatch({ type: 'SET_DENTIST', payload: res.data }))
  }, [dispatch, url])

  return (
    <>
      <Navbar />
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='dentistDetail'>
        <span className='dentistDetailName'>{state.selectedDentist?.name}</span>
        <span className='dentistDetailData'>Email: {state.selectedDentist?.email}</span>
        <span className='dentistDetailData'>Phone: {state.selectedDentist?.phone}</span>
        <span className='dentistDetailData'>Website: {state.selectedDentist?.website}</span>
      </div>
      <Footer />
    </>

  )
}

export default Detail