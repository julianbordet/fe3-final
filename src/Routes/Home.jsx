import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useGlobalContext } from '../Components/utils/global.context'
import { useEffect, useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useGlobalContext();

  //ESTE FAV DENTISTS TIENE QUE SER PARTE DEL REDUCER
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    if( localStorage.getItem('favDentists').length == 0 ){

    }

    localStorage.setItem('favDentists', JSON.stringify(favDentists));

  }, [favDentists]);

  const saveFav = (dentist) => {
    setFavDentists((prevState) => {
      return [...prevState, dentist]
        
      
    })
    console.log(favDentists)
  }

  return (
    <main className="" >
      <Navbar />
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data && state.data.map(dentista => <Card key={dentista.id} dentista={dentista} saveFav={saveFav} />)}
      </div>
      <Footer />
    </main>
  )
}

export default Home