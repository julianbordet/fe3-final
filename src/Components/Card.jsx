import React from "react";
import imagenDoctor from '../images/doctor.jpg'
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";



const Card = ({ dentista, saveFav } ) => {

  const { state, dispatch } = useGlobalContext();


  const addFav = (dentist) => {
    console.log("clickeaste add fav")
    saveFav(dentist)
  }
  
  return (
    <div className="card">
      <Link to={'/dentist/' + dentista.id}>
        <img src={imagenDoctor} alt="imagen-doctor"></img>
        <span className={state.theme === 'dark' ? 'typographyDark' : 'typographyLight'}>{dentista.name}</span>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={() => {addFav(dentista)}} className={state.theme === 'dark' ? 'typographyDark backgroundDark favButton' : 'typographyLight backgroundLight favButton'}>Add fav</button>

    </div>
  );
};

export default Card;
