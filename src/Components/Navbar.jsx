import React from 'react'
import { Link } from 'react-router-dom'
import { pages } from '../Components/utils/Constants';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <button>Change theme</button>
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Navbar