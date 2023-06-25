import { Routes, Route } from "react-router-dom";
import { pages } from './Components/utils/Constants';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/favs' element={<Favs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/dentist/:id' element={<Detail/>} />
    </Routes>
  );
}

export default App;
