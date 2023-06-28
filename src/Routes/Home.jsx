import React, { useContext, useState } from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useGlobalContext();

  return (
      <main className="" >
          <Navbar/>
          <h1>Home</h1>
          <div className='card-grid'>
            {/* Aqui deberias renderizar las cards */}
            {state.data && state.data.map(dentista => <Card key={dentista.id} dentista={dentista}/>)}
          </div>
        <Footer />
      </main>
  )
}

export default Home