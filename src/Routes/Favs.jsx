import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favDentists, setfavDentists] = useState([]);
  
  useEffect(() => {
    const dentists = JSON.parse(localStorage.getItem('favDentists'));
    console.log(favDentists)
    if (dentists) {
      setfavDentists(dentists);
    }
  }, []);
  

  return (
    <>
      <Navbar />
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentists.length > 0 && favDentists.map(dentista => <Card key={dentista.id} dentista={dentista} />)}
        {favDentists && <span>wasabi</span>}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      <Footer />
    </>
  );
};

export default Favs;
