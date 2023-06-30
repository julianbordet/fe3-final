import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { pages } from '../Components/utils/Constants';
import { useGlobalContext } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useGlobalContext();

  const handleThemeChange = () => {
    state.theme === 'light' ?  dispatch({ type: 'SET_THEME', payload: 'dark' }) : dispatch({ type: 'SET_THEME', payload: 'light' });
  }

  return (
    <nav className={state.theme === 'dark' ? 'navbar dark' : 'navbar'}>
      <button onClick={handleThemeChange} className={state.theme === 'dark' ? 'navbarItem changeThemeButton dark' : 'navbarItem changeThemeButton'}>Change theme</button>
      <div className={state.theme === 'dark' ? 'navbarItem dark' : 'navbarItem'}>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/favs'>Favs</Link>
        <Link className='link'to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar