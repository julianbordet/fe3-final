import { Routes, Route } from "react-router-dom";
import { pages } from './Components/utils/Constants';
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
    <Routes>
      <Route path={pages.home} element={<Home/>} />
      <Route path={pages.favs} element={<Favs />} />
      <Route path={pages.contact} element={<Contact />} />
      <Route path={pages.dentist} element={<Detail/>} />
    </Routes>
  );
}

export default App;
