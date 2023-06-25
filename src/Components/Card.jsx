import React from "react";
import imagenDoctor from '../images/doctor.jpg'
import { Link } from "react-router-dom";


const Card = ({ dentista }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={'/dentist/' + dentista.id}>
        <img src={imagenDoctor} alt="imagen-doctor"></img>
        <span>{dentista.name}</span>
          {/* En cada card deberan mostrar en name - username y el id */}

          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">Add fav</button>
        </Link>
    </div>
  );
};

export default Card;
