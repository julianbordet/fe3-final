import React from "react";
import imagenDoctor from '../images/doctor.jpg'
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";


const Card = ({ dentista, saveFav } ) => {

  const { state } = useGlobalContext();

  const addFav = (dentist) => {
    console.log("clickeaste add fav")
    saveFav(dentist)
  }
  
  return (
    <div className="card">
      <Link to={'/dentist/' + dentista.id}>
        <img src={imagenDoctor} alt="imagen-doctor"></img>
        <span className={state.theme === 'dark' ? 'typographyDark' : 'typographyLight'}>{dentista.name}</span>
      </Link>
      <button onClick={() => {addFav(dentista)}} className={state.theme === 'dark' ? 'typographyDark backgroundDark favButton' : 'typographyLight backgroundLight favButton'}>Fav</button>

    </div>
  );
};

export default Card;
