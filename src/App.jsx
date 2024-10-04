
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ListHome from "./components/ListHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PageTemplate from "./PageTemplate";

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element = {<Login/>}/>

        <Route path="/" element = {<PageTemplate />}>
          <Route path="/home" element = {<Home />}/>
        </Route> 
      </Routes>

      
      </BrowserRouter>
    </>
  );
}

export default App;
