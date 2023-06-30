import React from 'react'
import logo from '../images/DH.png'
import { useGlobalContext } from './utils/global.context';


const Footer = () => {

  const { state } = useGlobalContext();

  return (
    <footer className={state.theme === 'dark' ? 'footerComponent dark' : 'footerComponent'}>
        <p>Powered by</p>
        <img src={logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
