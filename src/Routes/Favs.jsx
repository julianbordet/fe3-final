import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Favs = () => {

  const { state } = useGlobalContext();

  const [favDentists, setfavDentists] = useState([]);
  
  useEffect(() => {
    const dentists = JSON.parse(localStorage.getItem('favDentists'));
    if (dentists) {
      setfavDentists(dentists);
    }
  }, []);
  
  return (
      <section className={state.theme === 'dark' ? 'routesDark' : 'routesLight'}>
        <Navbar />
          <h1 className={state.theme === 'dark' ? 'typographyDark' : 'typographyLight'}>Dentists Favs</h1>
          <div className="card-grid">
            {favDentists.length > 0 && favDentists.map(dentista => <Card key={dentista.id} dentista={dentista} />)}
          </div>
        <Footer />
      </section>
  );
};

export default Favs;