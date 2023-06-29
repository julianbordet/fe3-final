import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useGlobalContext } from '../Components/utils/global.context'
import { useEffect } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem('favDentists', JSON.stringify(state.favs));
  }, [state]);

  const saveFav = (dentist) => {
    dispatch({ type: 'SET_FAV', payload: dentist })
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