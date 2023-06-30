import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useGlobalContext } from '../Components/utils/global.context'
import { useEffect } from 'react'

const Home = () => {

  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem('favDentists', JSON.stringify(state.favs));
  }, [state]);

  const saveFav = (dentist) => {
    dispatch({ type: 'SET_FAV', payload: dentist })
  }

  return (
    <main className={state.theme === 'dark' ? 'routesDark' : 'routesLight'} >
      <Navbar />
      <h1 className={state.theme === 'dark' ? 'typographyDark' : 'typographyLight'}>Home</h1>
      <div className='card-grid'>
        {state.data && state.data.map(dentista => <Card key={dentista.id} dentista={dentista} saveFav={saveFav} />)}
      </div>
      <Footer />
    </main>
  )
}

export default Home