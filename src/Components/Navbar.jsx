import React from 'react'
import { Link } from 'react-router-dom'
import { pages } from '../Components/utils/Constants';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='navbar'>
      <button className='navbarItem changeThemeButton'>Change theme</button>
      <div className='navbarItem'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/favs'>Favs</Link>
        <Link className='link'to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar