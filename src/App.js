import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import "./pages/home/HomePage"
import HomePage from "./pages/home/HomePage";

function App() {
  return (

      <div className="App">
      <Navbar/>
      <Routes>
        <Route  path='/' element={< HomePage />}></Route>
        <Route exact path='/about' element={< AboutPage />}></Route>
        <Route exact path='/contact_us' element={< ContactPage />}></Route>
      </Routes>
      <Footer/>
      </div>
    

  );
}

export default App;
