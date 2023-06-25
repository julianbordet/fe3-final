import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <Navbar/>
      <h1>Home</h1>
      <h1>HOME PAGEE</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
      <Footer />
    </main>
  )
}

export default Home