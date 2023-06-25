import React, { useState } from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useEffect } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentistas, setDentistas] = useState([]);

  const getDentists = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setDentistas(response.data);
  }

  useEffect(() =>{
    getDentists();
  }, [])

  return (
    <main className="" >
      <Navbar/>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistas && dentistas.map(dentista => <Card dentista={dentista}/>)}
      </div>
      <Footer />
    </main>
  )
}

export default Home